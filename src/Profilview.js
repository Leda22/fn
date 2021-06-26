import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Avatar,  Container, Grid,  Paper,} from '@material-ui/core';
import 'antd/dist/antd.css';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from './components/Card1';
import { CalendarToday} from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import Header from './components/Header';
import Footer from './components/Footer';
import Rating from './components/Rating';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffc107',
        },

        secondary: {
            // This is green.A700 as hex.
            main: '#009688',
        },
    },

});


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#020c0f",
    },
    appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(20),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
  },
    fixedHeight: {
        height: 500,
    },
    user: {
        height: 500,
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        /* display: 'flex',
         alignSelf:"flex-end",
         alignItems:"flex-star",*/

    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    avtr: {
        paddingTop:"5%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        paddingTop: "2%",
        fontSize: "20px"
    },
    about1:{
        paddingLeft:"3%",
        
    },
    about0:{
        display: 'flex',
        alignItems: 'flex-start',
    },
    about:{
       margin:"5%",
    }

    
      
}));


export default function Profilview() {
    const classes = useStyles();
    
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    return (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="2xl" className={classes.container}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}  >
                            <Paper className={classes.user}>
                                <div className={classes.avtr}>
                                    <Avatar className={classes.large} />
                                    <h1 className={classes.name}>CLUB NAME </h1>
                                    <h3 style={{paddingBottom:"2%"}}>Slogan</h3>
                                    <Rating />
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={7} >
                         <Card/>
                        </Grid>
                        <Grid item xs={5} >
                            <Paper className={fixedHeightPaper}>
                                <div>
                                    <h1 style={{paddingBottom:"3%",color:"#009688"}}>ABOUT CLUB</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.</p>
                                    <Divider variant="middle" />
                                    <div className={classes.about}>
                                    <div className={classes.about0} >
                                        <CalendarToday/>
                                        <div className={classes.about1}>
                                    <h3> Creat at</h3>
                                    <p>2019/10/17</p>
                                    </div>
                                    </div>
                                    <div className={classes.about0}>
                                        <PhoneIcon/>
                                        <div className={classes.about1}>
                                    <h3> Phone</h3>
                                    <p>(+213) 541807279</p>
                                    </div>
                                    </div>
                                    <div className={classes.about0}>
                                        <RoomIcon/>
                                        <div className={classes.about1}>
                                    <h3> Adress</h3>
                                    <p>Faculty of science exact</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
<Footer/>
        </div>
    );
}
