import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import './slick-carousel.css';
import './slick.css';
import './slick-theme.css';
import db from '../firebase';

const styles = ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
});

const Carouselevent =()=> {
    const settings = {
      infinite: true,
      centerMode: false,
      speed: 500,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'ease-out'
    };
    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection("Posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
    }, [])
    return (
        <Slider {...settings}>
          {posts.map((post) => (
            <Card
              key={post.id}
              logo={post.data.logo}
              message={post.data.message}
              timestamp={post.data.timestamp}
              clubname={post.data.clubname}
              image={post.data.image}
            />
          ))}
        </Slider>
    );
  
}



export default withStyles(styles)(Carouselevent);