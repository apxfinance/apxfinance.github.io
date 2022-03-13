import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

import { Box, Container, Typography, Grid } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import StakeCard from './StakeCard';
import CemeteryImage from '../../assets/img/cemetery.png';
import { createGlobalStyle } from 'styled-components';

import useBanks from '../../hooks/useBanks';

const BackgroundImage = createGlobalStyle`
  body {
    // background-size: cover !important;
    background-color: #131127;
  }
`;

const Staking = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />

          {!!account ? (
            <Container maxWidth="lg">
              <Typography style={{color:'#fff', paddingLeft: '15px', fontWeight: '800'}} align="left" variant="h5" gutterBottom>
                Staking
              </Typography>
              <Typography style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>Welcome to the Apex staking page. Please find a pool below.</Typography>
              <Box mt={2}>
              <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 3).length === 0}>
                <Grid container>
                  {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                          <React.Fragment key={bank.name}>
                            <StakeCard bank={bank}/>
                          </React.Fragment>
                      ))}
                </Grid>
                  <Grid container spacing={30}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 3)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <StakeCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
              </div>

              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Staking;
