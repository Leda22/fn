import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Upload from './Upload'


function MessageSender() {
 
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src=""/>
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind,?`}
            
          />
          <button  type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        
        <Upload/>
        
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;