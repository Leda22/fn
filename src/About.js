import { Button, Link, makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import image from "./images/About.png";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#020c0f",
        


    },

    main:{
        paddingTop:"5%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "Flex-star",
        textAlign:"center",
        height: '100vh',



    },
    text:{
        flex: "50%",
        textAlign: "center",
        display: 'flex',
        flexDirection: "column",
        alignSelf:"center",
        paddingLeft:"3%",

        '& p':{
            paddingTop:"5%",
            fontSize:"18px",
            color:"white",
            fontFamily:"Time New Roman",
    
    
        },
        '& h1':{
            fontSize:"50px",
            color: "#095c71",
            fontFamily:"Time New Roman" ,
        },
    
    },
    imag:{
        display: 'flex',
        flex: "50%",
        justifyContent: "center",
    },
    btn: {
        width: "25%",
        marginLeft: "40%",
        marginTop: "10%",
        marginBottom: "10%",
        background: "linear-gradient(50deg, #339999 30%, #336699 90%)",
        borderRadius: 25,
        border: 0,
        color: "white",
        height: 48,
        padding: "0",
        boxShadow: "0 3px 5px 2px rgba(0,0,0,0.15)",
        '@media (max-width: 800px)': {
            padding: '0',
            marginTop: "2%",
        },
        '@media (max-width: 400px)': {
            padding: '0',
        },
    },
   

}));


export default function About() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Header/>

            <div className={classes.main}>

                <div className={classes.text}>
                <h1>ABOUT US</h1>
                    
                <p> This platform was developed in order to facilitate the monitoring and follow-up of clubs. It also facilitates the clubs' communication with the administration and with each other.
Any student interested in clubs can also join any in case of opening registrations.</p>
<Button
                          href="/contact"

                        fullWidth
                        variant="contained"
                        classes={{
                            root: classes.btn
                        }}
                    >
                        CONTACT US
                </Button>

</div>
<div className={classes.imag}>
    <img src={image} alt="" width="70%" />
    </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
}


