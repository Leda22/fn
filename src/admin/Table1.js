import React,{useEffect,useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Avatar,  makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import db from '../firebase';



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

export default function Table1() {
  const classes = useStyles();
  
  const [clubs, setClubs] = useState([])
  useEffect(() => {
    db.collection("Clubs").onSnapshot((snapshot) =>
      setClubs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    )
  }, [])
  return (
    <React.Fragment>
      <Title>CLUBS</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Clubs</TableCell>
            <TableCell>Club Name</TableCell>
            <TableCell>Club Email</TableCell>
            <TableCell>Club President</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell >Club Phone Number</TableCell>
            <TableCell >Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubs.map((club) => (
            <TableRow key={club.id}>
              <TableCell>
                <Avatar width='100px' height='100px' src={club.data.logo} />
              </TableCell>
              <TableCell>{club.data.clubname}</TableCell>
              <TableCell>{club.data.clubemail}</TableCell>
              <TableCell>{club.data.firstname + " " + club.data.lastname}</TableCell>
              <TableCell>{club.data.createdAt}</TableCell>
              <TableCell>{club.data.clubphone}</TableCell>
              <TableCell>{club.data.clubType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}