import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button } from '@material-ui/core';
import logo from './images/p.png';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useStateValue } from './Auth';
import db from './firebase';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#020c0f"

    },
    main0: {
        backgroundColor: "#020c0f"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'auto',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

    },
    paper: {
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 300,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    presdnt: {
        display: "flex",
        flexDirection: 'column',

    },

    first1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },

}));

export default function Clubs() {

    const classes = useStyles();
    const [{ user }, dispatch] = useStateValue()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        db.collection("Clubs").onSnapshot((snapshot) =>
            setClubs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        )
    }, [])

    return (
        <div className={classes.main}>
            <div className={classes.root}>
                <Header />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="xl" className={classes.container}>
                        <Grid container spacing={3}>
                            {clubs.map((club) => (
                                <Grid item xs={4} >
                                    <Paper elevation={3}
                                        className={classes.paper}>
                                        <div className={classes.presdnt}>
                                            <Avatar className={classes.large} src={club.data.logo} style={{ alignSelf: 'center' }} />
                                            <h3 style={{color:'white', paddingTop: '6%', textAlign:'center',fontFamily:"Time New Roman" }}>{club.data.clubname}</h3>
                                            <p style={{ color:'white', textAlign:'center',fontFamily:"Time New Roman"  }}>CLUB</p>
                                            <Button key={club.id} size="large" variant="outlined" color="primary" href="/@username">
                                                SEE PROFIL
                                            </Button>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </div>
            <Footer />
        </div>
    );
}

