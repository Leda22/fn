import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MuiPhoneNumber from "material-ui-phone-number";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  
  paper1: {
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height:600,
},

form1: {
    '& > *': {
        margin: theme.spacing(2),
        width: "40ch"
    },
    display: "flex",
    flexDirection: "column"
},

first1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
},
fixedHeight: {
    height: 600,
},
}));

export default function Editprofil() {
    const [value, setValue] = React.useState('male');
    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
  function sayHello() {
    swal("Thank You", "Changed successfully", "success");
  };
  return (
        <Grid>
                    <Paper className={classes.paper1} >
                        <h3 style={{ textAlign: 'center' }}>EDIT PROFILE </h3>
                        <form className={classes.form1} Validate autoComplete="off">
                                <TextField type="text" id="standard-basic" label="Club Name" required />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Upload Logo</FormLabel>
                                <input type="file" required/>
                            </FormControl>
                            <TextField type="password" id="standard-basic" label="Change Password" required />
                            <TextField type="email" id="standard-basic" label="Change Email"  required/>
                            <MuiPhoneNumber id="standard-basic" defaultCountry={'dz'} label=" Change Phone Number"  required/>
                            <Button variant="contained" type="submit" size="large" color="primary" onClick={sayHello}>
                                SAVE
                            </Button>

                        </form>

                    </Paper>
                </Grid>
       
  );
}