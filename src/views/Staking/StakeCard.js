import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';

import TokenSymbol from '../../components/TokenSymbol';
import useStatsForPool from '../../hooks/useStatsForPool';
import styled from "styled-components";
import ProgressCountdown from "../Boardroom/components/ProgressCountdown";
import moment from "moment";
import {getDisplayBalance} from "../../utils/formatBalance";

const CustomCard = styled(Card)`
border-radius: 23px!important;
background: #1d1932 !important;
`;
const StakeCard = ({ bank }) => {
  const statsOnPool = useStatsForPool(bank);

  return (
    <Grid item xs={12} md={8} lg={4} style={{padding: '15px'}}>
      <Card variant="outlined" style={{padding: '15px'}}>
        <CardContent>
          <Box style={{ position: 'relative' }}>
              <TokenSymbol size={44} symbol={bank.depositTokenName} />
            </Box>
            <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
              {bank.depositTokenName}
            </Typography>
            <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}}>
              {/* {bank.name} */}
              Deposit {bank.depositTokenName.toUpperCase()} earn {` ${bank.earnTokenName}`}
            </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} lg={4}>
              <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                Reward
              </Typography>
              <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800',marginLeft: '6px' }}>{` ${bank.earnTokenName}`}</Typography>

            </Grid>
            <Grid item xs={12} md={2} lg={4}>
              <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                Daily APR
              </Typography>
              <Typography style={{ fontSize: '16px', color: '#7184ad', fontWeight: '800',marginLeft: '6px' }}>
                {bank.closedForStaking || bank.genesisFinished ? '0.00' : statsOnPool?.dailyAPR}%
              </Typography>
            </Grid>
          </Grid>
            
          <Box p={0} pt={4} pb={0}>
          <Button color="primary" variant="contained" component={Link} to={`/staking/${bank.contract}`}>
            View Pool
          </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StakeCard;
