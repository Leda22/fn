import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  mail:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
},
secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
name:{
    width:"150px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-star',

},
name1:{
    display: 'flex',
    flexDirection:"column",

}
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="CLUBS" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="OTHER" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={classes.name}>
              <Avatar/>
              <div className={classes.name1}>
              <h6>CLUB NAME</h6>
              <p style={{color:"grey"}}>May,15 2021</p>
              </div>
              </div>
              
              
          <Typography className={classes.secondaryHeading}>Subject</Typography>
          <Typography >Email</Typography>

        
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{paddingRight:"50%"}} >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
          <IconButton >
                  <DeleteIcon />
              </IconButton>
        </AccordionDetails>
      </Accordion>
     
              
              
         
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={classes.name}>
              <h6>First name + Last name</h6>
              <p style={{color:"grey"}}>May,15 2021</p>
              </div>
              
              
          <Typography className={classes.secondaryHeading}>Subject</Typography>
          <Typography >Email</Typography>

        
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{paddingRight:"50%"}} >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
          <IconButton >
                  <DeleteIcon />
              </IconButton>
        </AccordionDetails>
      </Accordion>
      </TabPanel>
     
    </div>
  );
}