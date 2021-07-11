import React, { useEffect,} from 'react';
import '../style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
 

 

const TeamItem = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const { icon,name, title,dataAos,durations} = props.data

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
        
        <div className='prof-container' data-aos={dataAos} data-aos-duration={durations}>
        <div className='box'>
            <img className='img-box' src= {icon} alt="profile-img"/>
            <h2 className='name'>{name}</h2>
            <h3 className='des'>{title}</h3>
            <span className='social'> 
            <a> <i class="fab fa-linkedin"> </i> </a> 

            <a> <i class="far fa-envelope"> </i></a>  

            <a> <i class="fab fa-skype"></i> </a>
            
            </span>
            
        </div>
        </div>
     
   </>
    
  );
}

export default TeamItem;