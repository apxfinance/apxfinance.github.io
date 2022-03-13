import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';

import {Box, Button, Card, CardContent, Container, Grid, Typography} from '@material-ui/core';

import Page from '../../components/Page';
import StakeCard from "../Staking/StakeCard";
import styled, {createGlobalStyle} from "styled-components";
import TokenSymbol from "../../components/TokenSymbol";
const BackgroundImage = createGlobalStyle`
  body {
    // background-size: cover !important;
    background-color: #131127;
  }
`;
const Aboutus = () => {

  return (
      <Switch>
    <Page>
        <BackgroundImage />
        <Container maxWidth="lg">
            <Grid item xs={12} md={12} lg={8} style={{padding: '15px'}}>
                <Card variant="outlined" style={{padding: '15px'}}>
                    <CardContent>
                        <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                            About Apex Finance
                        </Typography>
                        <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                        </Typography>
                        <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                            Apex Finance aims to create technological solutions that shift the balance of power from corporate monopolies and other arbitrarinesses to you, the individual.
                        </Typography>
                        <Typography style={{ marginTop: '15px', fontSize: '14px',marginLeft: '6px' }}>
                        The first solution we’ve built aspires to remove competition distortions in today’s monetary system and protect the individual’s assets through seigniorage. It’s to empower you, the individual, to freely choose how you want to store and use your assets while outperforming current threats like inflation. Since its inception, APEX’s vision has attracted many brilliant minds full of energy and ideas to join us, creating the Apex ecosystem. People, technology, and ideas unite under a shared vision with a clear mission.
                        </Typography>
                        <Typography style={{ marginTop: '15px', fontSize: '14px',marginLeft: '6px' }}>
                            Technically spoken, this means we have created a token (APEX) that serves as the backbone of a rapidly growing ecosystem aimed towards bringing liquidity and new use cases to the Opera network. The protocol's underlying mechanism dynamically adjusts APEX's supply, pushing its price up or down relative to the price of $FTM. This method is called pegging causing it to become the highly liquid, mirrored asset with it's own set of features, rules and ecosystem.
                        </Typography>
                        <Typography style={{ marginTop: '15px', fontSize: '14px',marginLeft: '6px' }}>
                            Our current seigniorage protocol is just the start of something much bigger as we unite technology with the world’s most powerful force, the people and their ideas, to provide everyone access and equal opportunities in a global DeFi system.
                        </Typography>
                        <Box pt={5}>
                        <StyledLink component="a" href="https://discord.gg/qy223KXDrf" target="_blank">
                            Discord
                        </StyledLink>
                        <StyledLink component="a" href="https://t.me/+9_lAWsY862RjZjc0" target="_blank">
                            Telegram
                        </StyledLink>
                        </Box>
                        </CardContent>
                </Card>
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

export default Aboutus;
