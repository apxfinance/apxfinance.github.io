import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CashImage from '../../assets/img/apex_c.png';
import FantomLogo from '../../assets/img/fantom-logo-grey.png';
import DiscordLogo from '../../assets/img/discord.webp';
import ApexTokenGif from '../../assets/img/apextoken.gif';
import Image from 'material-ui-image';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import DiscordImage from "../../assets/img/discord.svg";
import ApexPurpleSmall from "../../assets/img/apexpurplesmall.gif";
import ApexLogo from "../../assets/img/apex3.png";


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#999cab',
    'background-color': '#1d1932 !important',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: '"Poppins", sans-serif',
    // fontFamily: '"Amarante", cursive',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'capitalize',
    color: '#e3ddfc',
    fontSize: '15px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      color: '#fff !important',
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e3ddfc',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} style={{display: 'flex', alignItems: 'center'}}>
              {/* <a className={ classes.brandLink } href="/">Apex Finance</a> */}
              <Image style={{ width: '120px',height: '30px', paddingTop: '0px', background: '#1d1931' }} src={ApexLogo} />
              {/*<Typography style={{color:'#fff', fontSize: '20px', marginLeft: '20px' }} >*/}
              {/*  APEX*/}
              {/*</Typography>*/}
            </Typography>
            <Box mr={5}>
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/statistics" className={classes.link}>
                Statistics
              </Link>
              <Link color="textPrimary" to="/staking" className={classes.link}>
                Staking
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                Board Room
              </Link>
              <Link color="textPrimary" to="/bonds" className={classes.link}>
                Bonds
              </Link>
              <Link color="textPrimary" to="/about" className={classes.link}>
                About
              </Link>
              <Link color="textPrimary" to="/Roadmap" className={classes.link}>
                Roadmap
              </Link>
              <Link color="textPrimary" to="/audits" className={classes.link}>
                Audits
              </Link>
              <Link color="textPrimary" to="/faq" className={classes.link}>
                FAQ
              </Link>

              {/* <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> */}
            </Box>
            <a href="https://discord.gg/qy223KXDrf" rel="noopener noreferrer" target="_blank">
              <Image color="none" style={{ width: '48px',height: '48px', paddingTop: '0px' }} src={DiscordLogo} />
            </a>
            <AccountButton text="Connect Wallet" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Image style={{ width: '108px',height: '27px', paddingTop: '0px', background: '#1d1931' }} src={ApexLogo} />
            {/*<Link to="/" style={{color:'#fff !important', fontSize: '20px',}} className={classes.brandLink}>*/}
            {/*  APEX*/}
            {/*</Link>*/}

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Statistics" to="/statistics" />
                <ListItemLink primary="Staking" to="/staking" />
                <ListItemLink primary="Board Room" to="/boardroom" />
                <ListItemLink primary="Bonds" to="/bonds" />
                <ListItemLink primary="About Us" to="/about" />
                <ListItemLink primary="Roadmap" to="/roadmap" />
                <ListItemLink primary="Audits" to="/audits" />
                <ListItemLink primary="FAQ" to="/faq" />
                {/*<ListItemLink primary="SBS" to="/sbs" />*/}
                {/*<ListItemLink primary="Liquidity" to="/liquidity" />*/}
                {/*<ListItemLink primary="Regulations" to="/regulations" />*/}
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect Wallet" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
