import React, { useState, useEffect } from 'react';
import Post from "./Post";
import "./feed.css";
import db from '../firebase';
import MessageSender from './MessageSender';
import { useStateValue } from '../Auth';

export default function Feed() {
  const [posts, setPosts] = useState([])
  const [{ user}, dispatch] = useStateValue()

  useEffect(() => {
    db.collection("Clubs").doc(user.uid).collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
  }, [])

  return (
    <div className="feed">
      <MessageSender/>
      {posts.map((post) => (
        <Post
          key={post.id}
          logo={post.data.logo}
          message={post.data.message}
          timestamp={post.data.timestamp}
          clubname={post.data.clubname}
          image={post.data.image}
        />
      ))}
    </div>
  );
}
