import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Avatar,  makeStyles } from '@material-ui/core';
import Logo from '../images/p.png';
import { fade } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  form1:{
    '& > *': {
      margin: theme.spacing(1),
      display: "flex",
      width: "50ch"
  },
display: "flex",
flexDirection:"column"
  },
  button1: {
    margin: theme.spacing(1),
  },
  
  ttl:{
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    paddingBottom:"3%",
  },
  paper1: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Generate Order Data
function createData(id, logo,name,email, president,date, phone, category) {
  return { id, logo,name,email, president,date, phone, category};
}

const rows = [
  createData(0,Logo, 'CLUB NAME', 'CLUB@gmail.com', 'CLUB PRESIDENT NAME', '16 Mar, 2019','+213 0541807279',"Scientific"),
  createData(1,Logo, 'CLUB NAME', 'CLUB@gmail.com', 'CLUB PRESIDENT NAME', '16 Mar, 2019','+213 0541807279',"Scientific"),
  createData(2,Logo, 'CLUB NAME', 'CLUB@gmail.com', 'CLUB PRESIDENT NAME', '16 Mar, 2019','+213 0541807279',"Scientific"),
  createData(3,Logo, 'CLUB NAME', 'CLUB@gmail.com', 'CLUB PRESIDENT NAME', '16 Mar, 2019','+213 0541807279',"Scientific"),
  createData(4,Logo, 'CLUB NAME', 'CLUB@gmail.com', 'CLUB PRESIDENT NAME', '16 Mar, 2019','+213 0541807279',"Scientific"),
];




export default function Table1() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Clubs</TableCell>
            <TableCell>Club Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Club President</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell >Phone Number</TableCell>
            <TableCell >Category</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar src={row.logo}/>
                </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.president}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}