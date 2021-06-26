import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import './slick-carousel.css';
import './slick.css';
import './slick-theme.css';

const styles = ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
});

class Carouselevent extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      infinite: true,
      centerMode: false,
      speed: 500,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'ease-out'
    };
    return (
      <div className="container">
        <Slider {...settings}>
         
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          
        </Slider>
      </div>
    );
  }
}

Carouselevent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Carouselevent);