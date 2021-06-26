import React, { Component } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import { IconButton } from "@material-ui/core";

class Like extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  state = {
      count:1
  }
  render() {
    return (
      
          <div
            className="container"
            
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
                <IconButton >
              <FavoriteIcon style={{ fill: '#DC143C' }}  />
              {this.state.count}
              </IconButton>
            ) : (
                <IconButton>
               <FavoriteIcon />
              </IconButton>
            )}
          </div>
       
    );
  }
}
  
export default Like;