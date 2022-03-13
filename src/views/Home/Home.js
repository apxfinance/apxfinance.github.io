import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import HomeImage from '../../assets/img/home.png';
import CashImage from '../../assets/img/crypto_tomb_cash.svg';
import Image from 'material-ui-image';
import styled from 'styled-components';
import ApexGreenSmall from '../../assets/img/apexgreensmall.gif';
import ApexRedSmall from '../../assets/img/apexredsmall.gif';
import ApexYellowSmall from '../../assets/img/apexyellowsmall.gif';
import ApexPurpleSmall from '../../assets/img/apexpurplesmall.gif';
import { Alert } from '@material-ui/lab';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { tomb as tombTesting, tShare as tShareTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd } from '../../tomb-finance/deployments/deployments.mainnet.json';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';
const BackgroundImage = createGlobalStyle`
  body {
    // background: url(${HomeImage}) no-repeat !important;
    // background-size: cover !important;
    background-color: #131127;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
  },
}));

const StyledLink = styled.a`
font-weight: 700;
text-decoration: none;
`;

const CustomCard = styled(Card)`
border-radius: 23px!important;
background: #1d1932 !important;
`;

const Home = () => {
  console.log('debug rendering this')
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('APEX-FTM-LP');
  const tShareFtmLpStats = useLpStats('ASHARE-FTM-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tomb.address;
  const buyTShareAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tShare.address;

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const tombLpZap = useZap({ depositTokenName: 'APEX-FTM-LP' });
  const tshareLpZap = useZap({ depositTokenName: 'ASHARE-FTM-LP' });



  const [onPresentTombZap, onDissmissTombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTombZap();
      }}
      tokenName={'APEX-FTM-LP'}
    />,
  );

  const [onPresentTshareZap, onDissmissTshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTshareZap();
      }}
      tokenName={'ASHARE-FTM-LP'}
    />,
  );

  return (
    <Page>
      <BackgroundImage />

      <Grid  container spacing={4}>

        {/* TVL */}
        <Grid item xs={12} sm={4}>
          <CustomCard style={{ height: '100%' }}>
            <CardContent align="left" style={{ marginTop: '15px', marginLeft: '17px' }} >
              <Typography style={{color:'#e3ddfc'}}>Total Value Locked</Typography>
              <CountUp style={{ fontSize: '25px', color: '#fff',fontWeight: '800' }} end={TVL} separator="," prefix="$" />
            </CardContent>
          </CustomCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CustomCard style={{ height: '100%' }}>
            <CardContent align="left" style={{ marginTop: '15px', marginLeft: '17px' }} >
              <Typography style={{color:'#e3ddfc'}}>$APEX market cap</Typography>
              <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)}
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>


        <Grid item xs={12} sm={4}>
          <CustomCard style={{ height: '100%' }}>
            <CardContent align="left" style={{ marginTop: '15px', marginLeft: '17px' }} >
              <Typography style={{color:'#e3ddfc'}}>Contract status</Typography>
              <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                Renounced
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} sm={7} >
        </Grid>
        <Grid item xs={12} sm={12}>
        <Typography style={{color:'#fff !important', fontWeight: '800', fontSize: '20px'}}>Current Apex Assets</Typography>
        </Grid>
        {/* APEX */}
        <Grid item xs={12} sm={3}>

          <CustomCard>
            <CardContent align="left" style={{ position: 'relative' }}>
              <Box p={2}>

                <Image style={{ width: '60px',height: '60px', paddingTop: '0px' }} src={ApexPurpleSmall} />
              </Box>
              <Box p={2} pt={0}>
              <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                APEX
              </Typography>
              </Box>
              <Box p={2} pt={0} pb={0}>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('APEX');
                }}

                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >

                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
                <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tombPriceInDollars ? tombPriceInDollars : '..'}</span>
                <span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px', fontWeight: '800' }}>
                  {tombPriceInFTM ? tombPriceInFTM : '..'} FTM1
                </span>
              {/*  <Typography style={{ fontSize: '14px', textAlign: 'justify'}}>*/}
              {/*  Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />*/}
              {/*  Circulating Supply: {tombCirculatingSupply} <br />*/}
              {/*  Total Supply: {tombTotalSupply}*/}
              {/*</Typography>*/}
              </Box>
              <Box p={1} pt={4} pb={0}>

              <Button
                  color="primary"
                  target="_blank"
                  href={buyTombAddress}
                  variant="contained"
              >
                Buy APEX
              </Button>
              </Box>
            </CardContent>
          </CustomCard>
        </Grid>

        {/* ASHARE */}
        <Grid item xs={12} sm={3}>
          <CustomCard>
            <CardContent align="left" style={{ position: 'relative' }}>
              <Box p={2}>

                <Image style={{ width: '60px',height: '60px', paddingTop: '0px' }} src={ApexRedSmall} />
              </Box>
              <Box p={2} pt={0}>
                <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                  ASHARE
                </Typography>
              </Box>
              <Box p={2} pt={0} pb={0}>
                <Button
                    onClick={() => {
                      tombFinance.watchAssetInMetamask('ASHARE');
                    }}

                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                >

                  <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
                </Button>


                <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
                <span style={{ fontSize: '16px', alignContent: 'flex-end', marginLeft: '10px', fontWeight: '800' }}>
                  {tSharePriceInFTM ? tSharePriceInFTM : '...'} FTM
                </span>
                {/*  <Typography style={{ fontSize: '14px', textAlign: 'justify'}}>*/}
                {/*  Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />*/}
                {/*  Circulating Supply: {tombCirculatingSupply} <br />*/}
                {/*  Total Supply: {tombTotalSupply}*/}
                {/*</Typography>*/}
              </Box>
              <Box p={1} pt={4} pb={0}>

                <Button
                    color="primary"
                    target="_blank"
                    href={buyTShareAddress}
                    variant="contained"
                >
                  Buy ASHARE
                </Button>
              </Box>
            </CardContent>
          </CustomCard>
        </Grid>

        {/* ABOND */}
        <Grid item xs={12} sm={3}>
          <CustomCard>
            <CardContent align="left" style={{ position: 'relative' }}>
              <Box p={2}>
                <Image style={{ width: '60px',height: '60px', paddingTop: '0px' }} src={ApexYellowSmall} />
              </Box>
              <Box p={2} pt={0}>
                <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                  ABOND
                </Typography>
              </Box>
              <Box p={2} pt={0} pb={0}>
                <Button
                    onClick={() => {
                      tombFinance.watchAssetInMetamask('ABOND');
                    }}

                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                >

                  <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
                </Button>


                <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
                <span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px', fontWeight: '800' }}>
                  ${tBondPriceInFTM ? tBondPriceInFTM : '...'} FTM
                </span>
                {/*  <Typography style={{ fontSize: '14px', textAlign: 'justify'}}>*/}
                {/*  Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />*/}
                {/*  Circulating Supply: {tombCirculatingSupply} <br />*/}
                {/*  Total Supply: {tombTotalSupply}*/}
                {/*</Typography>*/}
              </Box>
              <Box p={1} pt={4} pb={0}>
                <Button color="primary" variant="contained" component={Link} to={`/bonds`}>
                  Go To Bond
                </Button>
              </Box>
            </CardContent>
          </CustomCard>
        </Grid>

        {/* aUSD */}
        <Grid item xs={12} sm={3}>
          <CustomCard>
            <CardContent align="left" style={{ position: 'relative' }}>
              <Box p={2}>
                <Image style={{ width: '60px',height: '60px', paddingTop: '0px' }} src={ApexGreenSmall} />
              </Box>
              <Box p={2} pt={0}>
                <Typography style={{color:'#fff',fontWeight: '800'}} variant="h5" gutterBottom>
                  AUSD
                </Typography>
              </Box>
              <Box p={2} pt={0} pb={0}>


                <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>$1.00</span>
                {/*<span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px' }}>*/}
                {/*  ${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} FTM*/}
                {/*</span>*/}
                {/*  <Typography style={{ fontSize: '14px', textAlign: 'justify'}}>*/}
                {/*  Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />*/}
                {/*  Circulating Supply: {tombCirculatingSupply} <br />*/}
                {/*  Total Supply: {tombTotalSupply}*/}
                {/*</Typography>*/}
              </Box>
              <Box p={1} pt={4} pb={0}>

                <Button color="primary" variant="contained">
                  Soon
                </Button>
              </Box>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
