import React from "react";
import Slider from "react-animated-slider";
import "./slider-animations.css";
import "./styles.css";
import logo from '../images/p.png'
import { Hidden } from "@material-ui/core";

const content = [
  {
    
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
   
  },
  {
    
    image: "https://i.imgur.com/DCdBXcq.jpg",
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    
    
  },
  {
   
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    
  },
  {
    
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    
  },
  {
    
    image: "https://i.imgur.com/DCdBXcq.jpg",
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    
  },
  {
    
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  }
];

function Autoplay() {
	return (
		
			<Slider classNames="slider-wrapper" autoplay={3000}>
				{content.map((item, index) => (
					<div
						key={index}
                        className="slider-content"
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="inner">
            <Hidden mdDown>
              <p>{item.description}</p>
            </Hidden>
						</div>
                        <section>
            <img src={logo} alt="" />
            <span>
              Posted by <strong>CLUB NAME</strong>
            </span>
          </section>
			</div>
				))}
			</Slider>
			
	);
}

export default Autoplay;

   
    


