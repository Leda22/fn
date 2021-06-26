import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Uploadlg from '../admin/Uploadlg';
import MuiPhoneNumber from "material-ui-phone-number";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import swal from 'sweetalert';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    paper1: {
        backgroundColor: "white",
        padding: theme.spacing(1, 3, 2),

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


export default function Steper() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState('male');
    const [value1, setValue1] = React.useState('Science Club');
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    


    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const handleChange1 = (event) => {
        setValue1(event.target.value1);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value2);
    };
    function sayHello() {
        swal("Thank You", "Club added successfully", "success");
      }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="ADD LOGO" {...a11yProps(0)} />
                    <Tab label="CLUB INFO" {...a11yProps(1)} />
                    <Tab label="PRESIDENT INFO" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid>
                    <Paper className={fixedHeightPaper}>
                        <h3 style={{ textAlign: 'center' }}>ADD CLUB LOGO</h3>
                        <form Validate autoComplete="on">
                            <Uploadlg />
                        </form>
                    </Paper>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid>
                    <Paper className={fixedHeightPaper}>
                        <h3 style={{ textAlign: 'center' }}>ADD CLUB</h3>

                        <form className={classes.form1} noValidate autoComplete="off">

                            <TextField id="standard-basic" label="Username" />
                            <TextField id="standard-basic" label="Club Name" />
                            <TextField id="standard-basic" label="Creat At" />
                            <TextField type="email" id="standard-basic" label="Email" />
                            <MuiPhoneNumber id="standard-basic" defaultCountry={'dz'} label="Phone number" />,
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Category</FormLabel>
                                <RadioGroup aria-label="category" name="category" value={value1} onChange={handleChange1}>
                                    <FormControlLabel value="Science Club" control={<Radio />} label="Science Club" />
                                    <FormControlLabel value="Cultural Club" control={<Radio />} label="Cultural Club" />
                                    <FormControlLabel value="Sport Club" control={<Radio />} label="Sport Club" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                id="standard-multiline-static"
                                label="Slogan"
                                multiline
                                rows={4}
                            />

                        </form>
                    </Paper>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid>
                    <Paper className={fixedHeightPaper}>
                        <h3 style={{ textAlign: 'center' }}>ADD PRESIDENT CLUB</h3>
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
                                <RadioGroup aria-label="gender" name="gender1" value={value2} onChange={handleChange2}>
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
            </TabPanel>
        </div>
    );
}