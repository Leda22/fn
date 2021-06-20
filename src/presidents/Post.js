import "./post.css";
import { MoreVert } from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/p.png"
import { Fab, Input, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Upload from "./Upload";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  TextField1: {
    '& .MuiTextField-root': {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      width: '50ch',

    },

  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link >
              <img
                className="postProfileImg"
                src={logo}
                alt=""
              />
            </Link>
            <div className={classes.TextField1}>
              <TextField
                id="standard-textarea"
                placeholder="Placeholder"
                multiline
              />
            </div>
            <span className="postDate"></span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img className="postImg" src="" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Upload />
          </div>
          <div >

            <Fab size="medium" color="secondary" aria-label="add" >
              <SendIcon />
            </Fab>

          </div>
        </div>
      </div>
    </div>
  );
}
