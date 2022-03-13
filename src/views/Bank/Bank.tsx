import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Button, Card, CardContent, Typography, Grid, Container} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import useRedeem from '../../hooks/useRedeem';
import { Bank as BankEntity } from '../../tomb-finance';
import useTombFinance from '../../hooks/useTombFinance';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const classes = useStyles();
  const { bankId } = useParams();
  const bank = useBank(bankId);

  const { account } = useWallet();
  const { onRedeem } = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);
  return account && bank ? (
    <>

        <Typography style={{color:'#fff', paddingLeft: '15px'}} align="center" variant="h5">
          {`Deposit ${bank?.depositTokenName} and earn ${bank?.earnTokenName}`}
        </Typography>
        <Typography align="center" style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>Earn rewards by providing liquidity to our protocol.</Typography>

      <Box pt={4}>
        <Grid container justify="center" spacing={3} style={{ marginBottom: '20px' }}>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography style={{marginTop: '5px', color:'#fff !important'}}>APR</Typography>
                <Typography style={{fontWeight: 'bold'}}>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography style={{marginTop: '5px', color:'#fff !important'}}>Daily APR</Typography>
                <Typography style={{fontWeight: 'bold'}}>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography style={{marginTop: '5px', color:'#fff !important'}}>TVL</Typography>
                <Typography style={{fontWeight: 'bold'}}>${statsOnPool?.TVL}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <StyledBank>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              <Harvest bank={bank} />
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          {bank.depositTokenName.includes('LP') && <LPTokenHelpText bank={bank} />}
          <Spacer size="lg" />
          <div>
            <Button onClick={onRedeem} color="primary" variant="contained">
              Claim & Withdraw
            </Button>
          </div>
        </StyledBank>
      </Box>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{ bank: BankEntity }> = ({ bank }) => {
  const tombFinance = useTombFinance();
  const tombAddr = tombFinance.APEX.address;
  const tshareAddr = tombFinance.ASHARE.address;

  let pairName: string;
  let uniswapUrl: string;
  if (bank.depositTokenName.includes('APEX')) {
    pairName = 'APEX-FTM pair';
    uniswapUrl = 'https://spookyswap.finance/add/FTM/' + tombAddr;
  } else {
    pairName = 'ASHARE-FTM pair';
    uniswapUrl = 'https://spookyswap.finance/add/FTM/' + tshareAddr;
  }
  return (
          <Grid item xs={12} md={8} lg={8}>
        <StyledLink href={uniswapUrl} target="_blank">
          {`Provide liquidity for ${pairName} on SpookySwap`}
        </StyledLink>
          </Grid>
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  text-decoration: underline;
  color: #6f4ef2 !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  background-color: #141127 !important;
  border-color: #141127 !important;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
