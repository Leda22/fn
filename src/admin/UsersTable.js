import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Modal from '@material-ui/core/Modal';
import { Avatar, Fab, Fade, IconButton, makeStyles} from '@material-ui/core';
import Logo from '../images/p.png';
import EditIcon from '@material-ui/icons/Edit';
import Backdrop from '@material-ui/core/Backdrop';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Steper from '../components/Steper';
import Confirm from '../components/Confirm';





const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  ttl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "3%",
  },
  paper1: {
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




export default function UsersTable() {
  const classes = useStyles();
  const [open, setOpen1] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open2, setOpen2] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);

  };
  const vv = Boolean(anchorEl);
  const id = vv ? 'simple-popper' : undefined;
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);

  };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className={classes.ttl}>
        <Title>CLUBS</Title>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Fab onClick={handleOpen2} color="primary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>


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
            <TableCell >Edit/Del</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar src={row.logo} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.president}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >
                <IconButton onClick={handleOpen1}><EditIcon /></IconButton>

                
               <Confirm/>
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Steper/>
        </Fade>

      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
        <Steper/>
        </Fade>

      </Modal>
    
      </div>
  );
}