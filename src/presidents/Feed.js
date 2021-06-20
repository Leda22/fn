import React from 'react';
import Post from "./Post";
import "./feed.css";

export default function Feed() {
  
  return (
    <div className="feed">
      <div className="feedWrapper">
          <Post/>
      </div>
    </div>
  );
}
