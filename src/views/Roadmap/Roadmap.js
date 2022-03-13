import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {Box, Card, CardContent, Container, Grid, Typography} from '@material-ui/core';

import Page from '../../components/Page';
import {Switch} from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

const Roadmap = () => {

  return (
      <Switch>
          <Page>
              <BackgroundImage />
              <Container maxWidth="lg">
                  <Typography style={{color:'#fff', paddingLeft: '15px', fontWeight: '800'}} align="left" variant="h5" gutterBottom>
                      Roadmap
                  </Typography>
                  <Typography style={{color:'#fff !important', fontSize: '14px',paddingLeft: '15px'}}>On this page we will update you regarding our product roadmap for 2022 (no rights can be derived from
                  this roadmap).</Typography>

                  <Grid item xs={12} md={12} lg={8} style={{padding: '15px'}} spacing={59}>
                      <Box pt={3} pb={3}>
                      <Card variant="outlined">
                          <CardContent>
                              <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                  1. Healthy Peg/Liquidity (Q1 2022)
                              </Typography>
                              <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                              </Typography>
                              <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                  Our main objective for Q1 is to create as much liquidity as possible so that assets smoothly flow through the upcoming DeFi machine we are building. In line with that it's important to keep the Apex token pegged as it serves as the backbone of a rapidly growing ecosystem aimed towards bringing liquidity and new use cases to the Opera network.
                              </p>
                          </CardContent>
                      </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      2. Expanding our community (Q1/Q2 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      We strive to strengthen and accelerate the process of developing DeFi methods. An integrated approach and collaboration are needed to achieve this. That is why we will launch the Apex Empowerment Community: a platform where the different stakeholders join forces by exchanging knowledge and experiences.
                                  </p>
                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      3. Apex Vaults: The Autocompounder (Q1/Q2 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      By building our own auto-compounding vaults, we can maximizes user's yields by leveraging the power of compound interest resulting in exponential profits. They act as automatic financial strategies and no further human input required. Our vaults will also be available for other protocols to use. Apex takes 4.5% on vault profit which is distributed to ASHARE holders.                                  </p>

                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      4. Audit all smart contracts (Q1/Q2 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      Through the launch of our protocol we have created the need for crypto audit to provide independent assurance of the validity, security, and authenticity to our users. The first audit will be done after the launch of Apex Vaults.                                  </p>
                              </CardContent>
                          </Card>
                      </Box>

                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      5. Apex Fiat Gateway (Q2/Q3 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      While true believers in blockchain technology advocate decentralization, the fact remains that centralized exchanges (CEXs) onboard most retail users. Therefore we are building an easy to use fiat gateway that people are used to. Moreover, this means that people get to use their credit cards to buy Apex assets and use our Vaults on the fly.
                                  </p>

                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      5. AUSD Stable Coin (Q2/Q3 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      Apex and FTM assets tend to suffer from high volatility in its valuations. This can be a good thing for risk takers, but a bad thing for others. Fantom’s intraday price swings can be wild; it is common to see FTM moving in excess of 10% in either direction within a span of a few hours. This kind of short-term volatility makes APEX, FTM and other popular cryptocurrencies unsuitable for everyday use by the public. As our focus is mass adoption, a Stablecoins pegged to the price of 1 dollar will come in to play.                                  </p>
                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      6. APEX Cross Chain (Q3/Q4 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      The future of DeFi is cross-chain and we will bridge APEX to Avalanche, Binance Chain and Polygon.</p>
                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      7. NFT Mint & Market (Q3/Q4 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      Apex Mint & Market is a platform where NFTs can be stored, displayed, traded and minted (created). Apex takes 0.9% NFT platform fees which is distributed to ASHARE holders.
                                  </p>

                              </CardContent>
                          </Card>
                      </Box>
                      <Box pt={0} pb={3}>
                          <Card variant="outlined">
                              <CardContent>
                                  <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                      8. Mass Marketing (Q4 2022)
                                  </Typography>
                                  <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                  </Typography>
                                  <p style={{ fontSize: '14px',marginLeft: '6px', color: '#7184ad !important' }}>
                                      Too often we hear about crypto launches that failed due to a lack of marketing preparation. The post-launch phase is a commonly missed opportunity; without a plan for continued growth after the launch of our products as presented in our roadmap, product launch teams are left wondering, “Now what?” This is often the case when marketing is a lower priority or left out of the road map altogether due to timeline constraints. However, launching a product without marketing execution can result in a lot of lost time for the Apex team in the long run. Therefore we will launch a Mass Marketing campagne to reach the largest audience possible (think radio, television, newspapers, blogs) that aims to address the highest number of potential Apex users.
                                  </p>
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

const BackgroundImage = createGlobalStyle`
  body {
    // background-size: cover !important;
    background-color: #131127;
  }
`;


export default Roadmap;
