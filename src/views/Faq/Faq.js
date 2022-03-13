import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {Box, Card, CardContent, Container, Grid, Typography} from '@material-ui/core';

import Page from '../../components/Page';
import {Switch} from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

const Faq = () => {

  return (
      <Switch>
          <Page>
              <BackgroundImage />
              <Container maxWidth="lg">
                  <Typography style={{color:'#fff', paddingLeft: '15px', fontWeight: '800'}} align="left" variant="h5" gutterBottom>
                      FAQ
                  </Typography>
                  <Typography style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>Find out how to set up and use Apex. Learn about features and get answers to questions.</Typography>
                  <Typography style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>For more information also check out our
                      <StyledLinkb component="a" href="https://support.apx.finance" target="_blank">
                      knowledge base
                  </StyledLinkb>
                  </Typography>
                  <Grid item xs={12} md={12} lg={8} style={{padding: '15px'}} spacing={59}>
                      <Box pt={3} pb={3}>
                      <Card variant="outlined">
                          <CardContent>
                              <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                  1. Why Apex?
                              </Typography>
                              <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                              </Typography>
                              <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                  Apex Finance aims to create technological solutions that shift the balance of power from corporate monopolies and other arbitrarinesses to you, the individual.
                                  By pegging our APEX token to $FTM, APEX hopes to become the highly liquid, mirrored asset with it's own set of features and rules.
                              </Typography>
                          </CardContent>
                      </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>

                              <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      2. How do I start earning rewards?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      You can earn rewards by providing liquidity to our protocol and there are different methods to do so. Which method you choose depends on the amount of risk you are willing to take. That being said, the easiest way is described in our documentation. Disclaimer: Any investment that offers medium to high rewards has risks, and yield farming is no different. Any information given by Apex is for educational purposes only and cannot be used as financial advice.

                                  </Typography>
                                  <Box pt={3}>
                                      <StyledLink component="a" href="https://support.apx.finance" target="_blank">
                                          Knowledge base
                                      </StyledLink>
                                  </Box>
                              </CardContent>
                          </Card>

                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                          <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      3. How to buy Apex tokens?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      Currently the only way to buy Apex tokens is through swapping the available trading pairs on Spookyswap. You can swap FTM for APEX/ASHARE by clicking the pairs below.
                                  </Typography>
                                  <Box pt={3}>
                                      <StyledLink component="a" href="https://spookyswap.finance/swap?outputCurrency=0x9b7F7E44904Bb61a9710685c938eA5f867Cb36b2" target="_blank">
                                          Swap FTM - APX
                                      </StyledLink>
                                      <Box></Box>
                                      <StyledLink component="a" href="https://spookyswap.finance/swap?outputCurrency=0x8F5Ba67C2C9613A3C1A9Eae62eEde11515110C96" target="_blank">
                                          Swap FTM - ASHARE
                                      </StyledLink>
                                  </Box>
                          </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                          <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      4. Is Apex safe?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      Yield farming is a high-risk, high-reward strategy that can potentially lead to high returns, but remember that there are also risks such as impermanent loss due to the high volatility of the cryptocurrency market. Other risks that may occur are loss of funds due to your wallet or our protocol getting hacked. Obviously, we do everything we can to keep our protocol as secure as possible.
                                  </Typography>
                          </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                          <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      5. How do Bonds work?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      The ABOND tokens are unique tokens that can be utilized to help stabilize APEX price around peg (1 FTM) by reducing circulating supply of APEX if the TWAP (time-weighted-average-price) goes below peg (1 FTM).
                                  </Typography>
                          </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                          <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      6. What are liquidity tokens (LP)?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      For automated market makers (AMMs) like Uniswap, Curve, and Balancer to function, crypto liquidity providers must contribute assets to crypto liquidity pools. When tokens are deposited into a crypto liquidity pool, the platform automatically generates a new token that represents the share the depositor owns of that pool. This is called a liquidity provider (LP) token, and it can be used for a multitude of functions both within its native platform and other decentralized finance (DeFi) apps.
                                  </Typography>
                          </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                          <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      7. What is TWAP?
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                      An asset's time-weighted average price (TWAP) is the measure of an asset's average price over a predetermined period of time. TWAP can be calculated for any specified time duration. In case of Apex, The TWAP is based on a 6 hour timeframe (1 epoch).
                                  </Typography>
                          </CardContent>
                          </Card>
                      </Box>
                  </Grid>



              </Container>

          </Page>
      </Switch>
  );
};

const StyledLink = styled.a`
  text-decoration: underline;
  color: #6f4ef2 !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  margin-left: 6px !important;
  background-color: #1d1930 !important;
  border-color: #141127 !important;
`;

const StyledLinkb = styled.a`
  text-decoration: underline;
  color: #6f4ef2 !important;
  font-weight: 400 !important;
  font-size: 15px !important;
  margin-left: 6px !important;
  background-color: #121127 !important;
  border-color: #141127 !important;
`;

const BackgroundImage = createGlobalStyle`
  body {
    // background-size: cover !important;
    background-color: #131127;
  }
`;


export default Faq;
