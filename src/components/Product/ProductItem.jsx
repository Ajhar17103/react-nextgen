import React, { useEffect,  } from 'react';
import styles from './styles.module.css'
import { Card, CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
 

 

const ProductItem = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const {label,icon,description, dataAos,durations} = props.data

  // number displayed by component
 

  useEffect(() => {
   
    AOS.init({
      offset:100,
      easing:'ease',
     
    })
    // dependency array
  });
  
  
  return (
   <>
        
      <Card   data-aos={dataAos} data-aos-duration={durations}  className={styles.cards}>
        
      <CardImg style={{width:'80px', marginLeft:'35%', padding:'10px',}}  src={icon} alt="Card image cap" /> 
        <CardBody>
          <CardTitle tag="h5" className="text-center" > {label}</CardTitle>
          
          <CardSubtitle tag="h6" className="m-2 pt-3 text-center" >{description} </CardSubtitle>
           <CardSubtitle className="ml-5 pt-5 align-items-right">
           <button className="btn btn-sm" style={{background:"#00F99A",color:"white"}} >Read More</button>
            
           </CardSubtitle>
         
           
        </CardBody>
      </Card>
      
     
   </>
    
  );
}

export default ProductItem;