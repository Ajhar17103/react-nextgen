import Carousel from 'react-bootstrap/Carousel'
import React,{useState,useEffect} from 'react';
import stylesClass from './styles.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ControlledCarousel() {

  useEffect(() => {
   
    AOS.init({
      offset:100,
      easing:'ease',
     
    }) })
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={stylesClass.carousel}>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5926397.jpg&fm=jpg"
            alt="First slide"
            style={{height:'100vh'}}
          />
          <Carousel.Caption className={stylesClass.caption}>
            <h1 className={stylesClass.header} data-aos="fade-down" data-aos-duration="1000">NEXTGEN INNOVATION</h1>
            <p className={stylesClass.derciption}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className={stylesClass.button}>Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5926391/pexels-photo-5926391.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5926391.jpg&fm=jpg"
            alt="Second slide"
            style={{height:'100vh'}}
          />
  
          <Carousel.Caption className={stylesClass.caption}>
            <h1 className={stylesClass.header} data-aos="fade-down" data-aos-duration="1000">Second slide label</h1>
            <p className={stylesClass.derciption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className={stylesClass.button}>Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5926373/pexels-photo-5926373.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5926373.jpg&fm=jpg"
            alt="Third slide"
            style={{height:'100vh'}}
          />
  
          <Carousel.Caption className={stylesClass.caption}>
            <h1 className={stylesClass.header} data-aos="fade-down" data-aos-duration="1000">Third slide label</h1>
            <p className={stylesClass.derciption}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className={stylesClass.button}>Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5935792/pexels-photo-5935792.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5935792.jpg&fm=jpg
            "
            alt="Third slide"
            style={{height:'100vh'}}
          />
  
          <Carousel.Caption className={stylesClass.caption}>
            <h1 className={stylesClass.header} data-aos="fade-down" data-aos-duration="1000">Fourth slide label</h1>
            <p className={stylesClass.derciption}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className={stylesClass.button}>Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default ControlledCarousel;