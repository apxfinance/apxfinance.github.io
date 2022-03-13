import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import HomeImage from '../../assets/img/home.png';
import CashImage from '../../assets/img/crypto_tomb_cash.svg';
import Image from 'material-ui-image';
import { Container } from '@material-ui/core';

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

const Statistics = () => {
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



  return (
    <Page>
      <BackgroundImage />
      <Container maxWidth="lg">
        <Typography style={{color:'#fff', paddingLeft: '15px', fontWeight: '800'}} align="left" variant="h5" gutterBottom>
          Statistics
        </Typography>
        <Typography style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>Transparent and accessible data about Apex assets.</Typography>
        <Box mt={2}>
         <Grid  container spacing={4}>


        {/* APEX */}
        <Grid item xs={12} sm={6}>
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
                <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tombPriceInDollars ? tombPriceInDollars : '..'}</span>
                <span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px', fontWeight: '800' }}>
                  {tombPriceInFTM ? tombPriceInFTM : '..'} FTM
                </span>
                <Box mt={5}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <Typography style={{ fontSize: '14px' }}>
                    Marketcap
                  </Typography>
                  <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)}</Typography>

                </Grid>
                 <Grid item xs={12} md={6} lg={6}>
                    <Typography style={{ fontSize: '14px' }}>
                      Circulating Supply
                    </Typography>
                    <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tombCirculatingSupply}</Typography>

                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography style={{ fontSize: '14px' }}>
                      Total Supply
                    </Typography>
                    <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tombTotalSupply}</Typography>
                  </Grid>
                </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                    <p style={{ fontSize: '14px', color: '#7184ad !important' }}>
                      The $APEX token serves as the backbone of a rapidly growing ecosystem aimed towards bringing liquidity and new use cases to the Opera network and is used as a medium of exchange. The protocol's underlying mechanism dynamically adjusts APEX's supply, pushing its price up or down relative to the price of $FTM. This method is called pegging causing it to become the highly liquid, mirrored asset with it's own set of features, rules and ecosystem.                    </p>
                    </Grid>
                  </Grid>
              </Box>
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
        <Grid item xs={12} sm={6}>
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
                   <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                   <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tSharePriceInDollars ? tSharePriceInDollars : '..'}</span>
                   <span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px', fontWeight: '800' }}>
                  {tSharePriceInFTM ? tSharePriceInFTM : '..'} FTM
                </span>
                   <Box mt={5}>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Marketcap
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)}</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Circulating Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tShareCirculatingSupply}</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Total Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tShareTotalSupply}</Typography>
                       </Grid>
                     </Grid>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={12} lg={12}>
                         <p style={{ fontSize: '14px', color: '#7184ad !important' }}>
                           The ASHARE token is a crypto utility token that serves many use cases within our ecosystem as they allow Apex users to perform certain actions and claim certain rights.
                           Currently, the token serves as a way to measure the value of the APEX Protocol and shareholder trust in its ability to maintain APEX close to peg. During epoch expansions the protocol mints APEX and distributes it proportionally to all ASHARE holders who have staked their tokens in the Board Room.
                         </p>
                       </Grid>
                     </Grid>
                   </Box>
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
        <Grid item xs={12} sm={6}>
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
                   <Typography style={{ fontSize: '14px'}}>Current Price</Typography>
                   <span style={{ fontSize: '20px', textAlign:'right', color: '#6f4df2', fontWeight: '800' }}>${tBondPriceInDollars ? tBondPriceInDollars : '..'}</span>
                   <span style={{ fontSize: '16px', alignContent: 'flex-start', marginLeft: '10px', fontWeight: '800' }}>
                  {tBondPriceInFTM ? tBondPriceInFTM : '..'} FTM
                </span>
                   <Box mt={5}>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Marketcap
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)}</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Circulating Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tBondCirculatingSupply}</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Total Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>{tBondTotalSupply}</Typography>
                       </Grid>
                     </Grid>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={12} lg={12}>
                         <p style={{ fontSize: '14px', color: '#7184ad !important' }}>
                           The ABOND tokens are unique tokens that can be utilized to help stabilize APEX price around peg (1 FTM) by reducing circulating supply of APEX if the TWAP (time-weighted-average-price) goes below peg (1 FTM).

                           Currently, the token serves as a way to measure the value of the APEX Protocol and shareholder trust in its ability to maintain APEX close to peg. During epoch expansions the protocol mints APEX and distributes it proportionally to all ASHARE holders who have staked their tokens in the Board Room.                         </p>
                       </Grid>
                     </Grid>
                   </Box>
                 </Box>
                 <Box p={1} pt={4} pb={0}>
                   <Button
                       color="primary" variant="contained" component={Link} to={`/bonds`}
                   >
                     To Bonds
                   </Button>
                 </Box>
               </CardContent>
             </CustomCard>
           </Grid>

        {/* aUSD */}
        <Grid item xs={12} sm={6}>
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
                   <Box mt={5}>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Marketcap
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>$0.00</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Circulating Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>0</Typography>

                       </Grid>
                       <Grid item xs={12} md={6} lg={6}>
                         <Typography style={{ fontSize: '14px' }}>
                           Total Supply
                         </Typography>
                         <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800' }}>0</Typography>
                       </Grid>
                     </Grid>
                     <Grid container spacing={3}>
                       <Grid item xs={12} md={12} lg={12}>
                         <p style={{ fontSize: '14px', color: '#7184ad !important' }}>
                           TBA
                         </p>
                       </Grid>
                     </Grid>
                   </Box>
                 </Box>
               </CardContent>
             </CustomCard>
           </Grid>
      </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default Statistics;
