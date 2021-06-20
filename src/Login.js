import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Logo from "./images/login.svg";
import Log from "./images/login.png";
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import Header from "./components/Header";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Univ Club
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Log})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#020c0f",
    backgroundSize: "75%",
    backgroundPosition: "center",

  },
  paper: {
    height: "100vh",
    margin: theme.spacing(15, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginTop: "70px",
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#336699"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "70px",

    "& label.Mui-focused": {
      color: "#336699"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#336699"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#336699"
      },
      "&:hover fieldset": {
        borderColor: "#336699"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#336699"
      }
    }
  },
  submit: {
    width: "50%",
    marginLeft: "25%",
    marginTop: "10px",
    marginBottom: "50px",
    background: "linear-gradient(50deg, #339999 30%, #336699 90%)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 48,
    padding: "0px 30px",
    boxShadow: "0 3px 5px 2px rgba(0,0,0,0.15)",
  },
  formControl: {
    marginTop: 20,
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = React.useState('')
  // eslint-disable-next-line
  const [login, setLogin] = useState("")

  let history = useHistory()

  Axios.defaults.withCredentials = true
  const signIn = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3030/login', {
      username: username,
      password: password,
      role: role
    })
       if ({role:'admin'})
       { return history.push('/admin') } 
       if ({role:'president'}) 
       { return history.push('/president') } 
       else { return history.push('/login') } 
    
  }

  
  useEffect(() => {
    Axios.get('http://localhost:3030/login').then((response) => {
      if (response.data.loggedIn === true) {
        history.push('/admin')
      }
    })
  }, [history])
  return (
    <Grid container component="main" className={classes.root} >
      <Header/>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={Logo} alt="" width="29px" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              type='text'
              placeholder='Username'
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <TextField
              variant="outlined"
              type='password'
              placeholder='Password'
              autoComplete="true"
              onChange={(e) => { setPassword(e.target.value) }}
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel >who are you ?</InputLabel>
              <Select
                value={role}
                onChange={(e) => { setRole(e.target.value) }}
              >
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'president'}>President</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={signIn}
              classes={{
                root: classes.submit
              }}
            >
              Sign In
            </Button>
            <h1> {login} </h1>
            <Copyright />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
