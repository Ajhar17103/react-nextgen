import React, { useEffect, useState } from 'react';

import { Card, CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
 

 

const CountsItem = props => {
    const {label, number, duration,dataAos,durations,icon,alt } = props.data

    // number displayed by component
    const [count, setCount] = useState("0")
  
    useEffect(() => {
      let start = 0;
      // first three numbers from props
      const end = parseInt(number.substring(0,3))
      // if zero, return
      if (start === end) return;
  
      // find duration per increment
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;
  
      // timer increments start counter 
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3))
        if (start === end) clearInterval(timer)       
      }, incrementTime);

      AOS.init({
        offset:100,
        easing:'ease',
       
      })
  
      // dependency array
    }, [number, duration]);
  
  
  
  return (
   <>
        
      <Card   data-aos={dataAos} data-aos-duration={durations}>
        
      <CardImg style={{width:'50px', paddingTop:'10px', marginLeft:'40%',borderRadius:'50%'}}  src={icon} alt={alt} /> 
        <CardBody>
          <CardTitle tag="h2" className="text-center" > {count} + </CardTitle>
          
          <CardSubtitle tag="h6" className="pt-3 text-center  text-muted ">{label} </CardSubtitle>
            
           
        </CardBody>
      </Card>
      
     
   </>
    
  );
}

export default CountsItem;