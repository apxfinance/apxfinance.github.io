import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Box, Card, CardContent, Container, Grid, Typography} from '@material-ui/core';
import Page from '../../components/Page';
import {Switch} from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

const BackgroundImage = createGlobalStyle`
  body {
    // background-size: cover !important;
    background-color: #131127;
  }
`;
const Audits = () => {

    return (
        <Switch>
            <Page>
                <BackgroundImage />
                <Container maxWidth="lg">
                    <Grid item xs={12} md={12} lg={8} style={{padding: '15px'}}>
                        <Card variant="outlined" style={{padding: '15px'}}>
                            <CardContent>
                                <Typography style={{color:'#fff', fontWeight:'800', marginLeft: '6px'}} variant="h6">
                                    Audits
                                </Typography>
                                <Typography style={{marginBottom: '30px', marginLeft: '6px', fontSize: '14px'}} color="textSecondary">
                                </Typography>
                                <Typography style={{ fontSize: '14px',marginLeft: '6px' }}>
                                    While blockchains began life to facilitate the development of cryptocurrencies, they are now widely used across businesses for smart contracts, online transaction management, asset record management, and securing critical data. Through the launch of our protocol we have created the need for crypto audit to provide independent assurance of the validity, security, and authenticity to our users. An overview about audits and scheduled audits can be found below.
                                </Typography>
                                <Box pt={5}>
                                <Typography style={{ marginTop: '15px', marginTop: '15px', fontSize: '16px',marginLeft: '6px', fontWeight: 'bold' }}>
                                    Audits conducted by crypto audit companies:
                                </Typography>
                                <Typography style={{ marginTop: '15px', fontSize: '14px',marginLeft: '6px' }}>
                                    N/A
                                </Typography>
                                <Typography style={{ marginTop: '15px', fontSize: '16px',marginLeft: '6px',marginTop: '32px', fontWeight: 'bold' }}>
                                    Scheduled audits:
                                </Typography>
                                <Typography style={{ marginTop: '15px', fontSize: '14px',marginLeft: '6px' }}>
                                    Hacken Security Audit (q2 2022)
                                    <StyledLink component="a" href="https://hacken.io/services/blockchain-security/blockchain-protocol-security/" target="_blank">
                                        More info
                                    </StyledLink>
                                </Typography>
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

export default Audits;
