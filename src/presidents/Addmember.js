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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default function Addmember() {
    const [value, setValue] = React.useState('male');
    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
  function sayHello() {
    swal("Thank You", "Member added successfully", "success");
  };
  return (
        <Grid>
                    <Paper className={classes.paper1} >
                        <h3 style={{ textAlign: 'center' }}>ADD CLUB MEMBER </h3>
                        <form className={classes.form1} noValidate autoComplete="off">
                            <div className={classes.first1}>
                                <TextField type="text" id="standard-basic" label="First Name" />
                                <TextField type="text" id="standard-basic" label="Last Name" />
                            </div>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                            <TextField type="text" id="standard-basic" label="City" />
                            <TextField type="email" id="standard-basic" label="Email" />
                            <MuiPhoneNumber id="standard-basic" defaultCountry={'dz'} label="Phone number" />,
                            <TextField type="text" id="standard-basic" label="University" />
                            <TextField type="text" id="standard-basic" label="The College" />
                            <TextField type="text" id="standard-basic" label="Academic level" />
                            <Button variant="contained" size="large" color="primary" onClick={sayHello}>
                                ADD
                            </Button>

                        </form>

                    </Paper>
                </Grid>
       
  );
}