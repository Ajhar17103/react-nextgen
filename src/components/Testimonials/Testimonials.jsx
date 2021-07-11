import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './testimonials.css';

 


export default class Testimonials extends Component {
  render() {
    return (
        <>

        <h1 className="text-center"><strong>Client  Testimonials</strong></h1>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5100}
       
      >
       <div>
          <img src="http://www.nextgenitltd.com/images/testi/4.png"  alt="testimonials" className="carouselimg"/>
          <div className="myCarousel">
            <h2>zyz</h2>
            <h4>zyz</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>
        <div>
          <img src="http://www.nextgenitltd.com/images/testi/1.png"  alt="testimonials" className="carouselimg"/>
          <div className="myCarousel">
            <h2>abc</h2>
            <h4>cba</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
        <div>
          <img src="http://www.nextgenitltd.com/images/testi/4.png"  alt="testimonials" className="carouselimg"/>
          <div className="myCarousel">
            <h2>zyz</h2>
            <h4>zyz</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        
      </Carousel>
      </>
    );
  }
}