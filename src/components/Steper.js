import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
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



const useStyles = makeStyles(theme => ({
  root: {
    width: '35%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
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

function getSteps() {
  return [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad'
  ];
}


function getStepContent(stepIndex) {
  const classes = useStyles();
  const [value, setValue] = React.useState('male');
  const [value1, setValue1] = React.useState('Science Club');
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const handleChange = (event) => {
    setValue1(event.target.value1);
  };
  switch (stepIndex) {
    case 0:
      return (
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
                <RadioGroup aria-label="category" name="category" value={value1} onChange={handleChange}>
                  <FormControlLabel value="Science Club" control={<Radio />} label="Science Club" />
                  <FormControlLabel value="Cultural Club" control={<Radio />} label="Cultural Club" />
                  <FormControlLabel value="Sport Club" control={<Radio />} label="Sport Club" />
                </RadioGroup>
              </FormControl>
            </form>
          </Paper>
        </Grid>
      );
    case 1:
      return (
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
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
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

            </form>

          </Paper>
        </Grid>
      );
    case 2:
      return (
        <Grid>
          <Paper className={fixedHeightPaper}>
            <h3 style={{ textAlign: 'center' }}>ADD CLUB LOGO</h3>
            <form Validate autoComplete="on">
              <Uploadlg />
            </form>
          </Paper>
        </Grid>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
