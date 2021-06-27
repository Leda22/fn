import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Avatar, Container, Grid, Paper, } from '@material-ui/core';
import 'antd/dist/antd.css';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from './components/Card';
import { CalendarToday } from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import Header from './components/Header';
import Footer from './components/Footer';
import Rating from './components/Rating';
import db from './firebase';
import { useStateValue } from './Auth';
import Post from "./presidents/Post";



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
        alignItems: "center",
        justifyContent: "center",
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
        paddingTop: "5%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        paddingTop: "2%",
        fontSize: "20px"
    },
    about1: {
        paddingLeft: "3%",

    },
    about0: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    about: {
        margin: "5%",
    }
}));


export default function Profilview() {
    const classes = useStyles();
    const [posts, setPosts] = useState([])
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [{ user }, dispatch] = useStateValue()
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        db.collection("Clubs").onSnapshot((snapshot) =>
            setClubs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
        db.collection("Posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
    }, [])


    return (
        <div className={classes.root}>
            <Header />
            {clubs.map((club) => (
                <main className={classes.content} key={club.id}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="2xl" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}  >
                                <Paper className={classes.user}>
                                    <div className={classes.avtr}>
                                        <Avatar src={club.data.logo} className={classes.large} />
                                        <h1 className={classes.name}>{club.data.clubname}</h1>
                                        <h3 style={{ paddingBottom: "2%" }}>{club.data.slogan}</h3>
                                        <Rating />
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={7} >
                                {posts.map((post) => (
                                    <Post
                                        key={post.id}
                                        logo={post.data.logo}
                                        message={post.data.message}
                                        timestamp={post.data.timestamp}
                                        clubname={post.data.clubname}
                                        image={post.data.image}
                                    />
                                ))}
                            </Grid>
                            <Grid item xs={5} >
                                <Paper className={fixedHeightPaper}>
                                    <div>
                                        <h1 style={{ paddingBottom: "3%", color: "#009688" }}>ABOUT CLUB</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.</p>
                                        <Divider variant="middle" />
                                        <div className={classes.about}>
                                            <div className={classes.about0} >
                                                <CalendarToday />
                                                <div className={classes.about1}>
                                                    <h3> Creat at</h3>
                                                    <p>{club.data.createdAt}</p>
                                                </div>
                                            </div>
                                            <div className={classes.about0}>
                                                <PhoneIcon />
                                                <div className={classes.about1}>
                                                    <h3> Phone</h3>
                                                    <p>{club.data.clubphone}</p>
                                                </div>
                                            </div>
                                            <div className={classes.about0}>
                                                <RoomIcon />
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
            ))}
            <Footer />
        </div>
    );
}
