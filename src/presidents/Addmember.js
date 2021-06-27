import React, { useState } from 'react';
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
import { useStateValue } from '../Auth';
import db from '../firebase';

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
        height: 600,
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
    const classes = useStyles();
    const [gender, setGender] = useState('male');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [city, setCity] = useState('')
    const [memberEmail, setMemberEmail] = useState('')
    const [memberPhone, setMemberPhone] = useState('')
    const [university, setUniversity] = useState('')
    const [college, setCollege] = useState('')
    const [academicLevel, setAcademicLevel] = useState('')
    const [{ user }, dispatch] = useStateValue()

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    function AddMember(e) {
        e.preventDefault()
        db.collection('Clubs').doc(user.uid).collection('members').add({
            firstname: firstName,
            lastname: lastName,
            birthday: birthday,
            gender: gender,
            city: city,
            memberemail: memberEmail,
            memberphone: memberPhone,
            university: university,
            college: college,
            academicLevel: academicLevel,
        })
        swal("Thank You", "Club added successfully", "success")
    }
    return (
        <Grid>
            <Paper className={classes.paper1} >
                <h3 style={{ textAlign: 'center' }}>ADD CLUB MEMBER </h3>
                <form className={classes.form1} noValidate autoComplete="off">
                    <div className={classes.first1}>
                        <TextField
                            type="text"
                            label="First Name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        <TextField
                            required={true}
                            type="text"
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                    <TextField
                        required={true}
                        label="Birthday"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={birthday}
                        onChange={(e) => { setBirthday(e.target.value) }}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required={true}
                        type="text"
                        label="City"
                        value={city}
                        onChange={(e) => { setCity(e.target.value) }}
                    />
                    <TextField
                        required={true}
                        type="email"
                        label="Member Email"
                        value={memberEmail}
                        onChange={(e) => { setMemberEmail(e.target.value) }}
                    />
                    <TextField
                        required={true}
                        type='tel'
                        label="Member Phone"
                        value={memberPhone}
                        onChange={(e) => { setMemberPhone(e.target.value) }}
                    />
                    <TextField
                        required={true}
                        type="text"
                        label="University"
                        value={university}
                        onChange={(e) => { setUniversity(e.target.value) }}
                    />
                    <TextField
                        required={true}
                        type="text"
                        label="College"
                        value={college}
                        onChange={(e) => { setCollege(e.target.value) }}
                    />
                    <TextField
                        required={true}
                        type="text"
                        label="Academic level"
                        value={academicLevel}
                        onChange={(e) => { setAcademicLevel(e.target.value) }}
                    />
                    <Button variant="contained" size="large" color="primary" onClick={AddMember}>
                        ADD
                    </Button>

                </form>

            </Paper>
        </Grid>

    );
}