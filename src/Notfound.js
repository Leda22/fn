import {makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import BG from "./images/404.png";

const useStyles = makeStyles((theme) => ({
    root: {
       backgroundImage:`url(${BG})`,
        backgroundColor: "#020c0f",
        height:"100vh",
        backgroundSize: '50%',
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",     


    },

    

}));


export default function About() {
    const classes = useStyles();


    return (
        <div >
            <div className={classes.root}>
            <Header/>

            
            
            </div>
            <Footer/>
        </div>
    );
}