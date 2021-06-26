import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Avatar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avtr:{
    paddingBottom:"5%",
    paddingTop:"5%",
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function createData(id, logo, date, name, shipTo, paymentMethod, amount) {
  return { id, logo, date, name, shipTo, paymentMethod, amount};
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,),
];

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
          <div className={classes.avtr}>
            <Avatar alt=""  className={classes.large} />
            {rows.map((row) => (
            <h3>{row.name}</h3>
            ))}
             <p>ADMIN</p>

            </div>
      <ListItem button
      component={Link} to="/admin"
      selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button 
    component={Link} to="/admin/clubpresidents"
     selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Club Presidents" />
    </ListItem>
    <ListItem button selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          component={Link} to="/admin/clubprofil"
          >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clubs Profiles" />
    </ListItem>
    
    <ListItem button
     selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
              component={Link} to="/admin/users"
>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button
      selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          component={Link} to="/admin/inbox">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    
    </div>
  );
}
