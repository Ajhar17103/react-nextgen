import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import About from '../About/About';

import Choose from '../ChooseUs/Choose';
import Testimonials from '../Testimonials/Testimonials';
import Products from '../Product/Product';
import Count from '../Count/Count';
import ContactPage from '../Contact/ContactPage';
import Service from '../Service/Service'

import ControlledCarousel from '../Slider/AutoSlides/Bt'

function Home() {
  return (
    <>
    <ControlledCarousel/>
   
    <Service/>
    <Choose/>
     <Count/>
    <Testimonials/>
     
    
   <Products/>
   <About/>
   
   <ContactPage/>
  <Footer/>

   
    {/*<Counts/> <Choose/>  <Cards/> <About/>   <Footer /> */}
   
     
    
    </>
  );
}

export default Home;
