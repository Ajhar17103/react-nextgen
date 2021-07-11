import React,{useState,useEffect} from 'react'

import { Container,Row, Col ,CardImg,Card} from 'reactstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Collapse,} from 'reactstrap';


const styles={
       containerStyle:{
        marginTop:'50px',
        marginBottom:'50px '
         
       },
       aboutDiv:{
        textAlign:'left',
        borderLeft:'8px solid #032B47',
        paddingLeft:'5px',
        margin:'5px',
        marginBottom:'30px'
       },
       paragraph:{
        textAlign:'right',
       background:'black'
       },
       item:{
        display: 'flex',
        justifyContent:'space-between',
        color:'#032B47',
        padding:'25px'
       
       },
       collapse:{
        padding:'20px'
       }
}

 
 const Choose = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const toggle1= () => setIsOpen1(!isOpen1)
    const toggle2= () => setIsOpen2(!isOpen2)
    const toggle3= () => setIsOpen3(!isOpen3)
    const toggle4= () => setIsOpen4(!isOpen4)
    const toggle5= () => setIsOpen5(!isOpen5)


  useEffect(()=>{
    AOS.init({
      offset:100,
      easing:'ease',
      duration:'3000'
    })
  })
   return (
    <Container style={styles.containerStyle}>
      <Row >

      <Col sm={12}  md={6} data-aos="fade-up"
     data-aos-duration="3000">

       <Card>
       <CardImg top width="100%" height="600px" src="https://th.bing.com/th/id/R458fdf9578a58ecb17c7a817d5feb4e2?rik=toLAmfHEGlpoIg&pid=ImgRaw" alt="Card image cap" />
       </Card>


      </Col>

      <Col sm={12}  md={6} >
      <div>

     
      <div style={styles.aboutDiv}  data-aos="zoom-in"
    data-aos-duration="1000">
         <h1> <strong>Why Choose Us</strong>  </h1>
      </div>


      <div  >
      <p data-aos="zoom-in-up"  data-aos-duration="1300"> <b>NEXTGEN Innovation Ltd. is a full facility of IT system provider who values our associations with clients, merchants, corporate allies and co-workers. Strong, constructive relationships that are open and authentic are a big part of what segregates NEXTGEN Innovation Ltd .</b>
</p>
<p  data-aos="zoom-in-down"  data-aos-duration="1700">
<b>Followings are the reasons you can depend on NEXTGEN Innovation Ltd. to have you and your business awake and active:</b></p>


<div style={styles.item}  data-aos="fade-right"  data-aos-duration="1900">
    <span><strong> 01 Practical</strong> </span>  
    <i class="fas fa-chevron-circle-down" onClick={toggle1}></i>
</div>

<div>
<Collapse isOpen={isOpen1} style={styles.collapse}>
       
       <p>
       Our service attitude is proactive, not reactive. Through state-of- the-art system monitoring and supervision, we realize your network 24/7 to detect issues and report them EARLIER they converted into complications, rather than stroking out fires.
       </p>
     
   </Collapse>
</div>

<div style={styles.item} data-aos="fade-left"  data-aos-duration="2100">
    <span><strong> 02 Decent</strong> </span>  
    <i class="fas fa-chevron-circle-down" onClick={toggle2}></i>
</div>

<div>
<Collapse isOpen={isOpen2}>
       
       <p>
       NEXTGEN Innovation Ltd. is a valued front-runner in the community and the business. Our delighted success is the big number of extended clients who placed their trust on us since long term.
       </p>
     
   </Collapse>
</div>
<div style={styles.item} data-aos="fade-right"  data-aos-duration="2400">
    <span><strong> 03  Corporate perception</strong> </span>  
    <i class="fas fa-chevron-circle-down" onClick={toggle3}></i>
</div>

<div>
<Collapse isOpen={isOpen3}>
       
       <p>
       Our wide experience managing all types of multifaceted projects means we will take care every aspect and synchronize all vendors so you can rest guaranteed that your project will be finalized on time and on budget.
       </p>
     
   </Collapse>
</div>




<div style={styles.item} data-aos="fade-left"  data-aos-duration="2700">
    <span><strong> 04 Complete project management</strong> </span>  
    <i class="fas fa-chevron-circle-down" onClick={toggle4}></i>
</div>

<div>
<Collapse isOpen={isOpen4}>
       
       <p>
       We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.
       </p>
     
   </Collapse>
</div>





<div style={styles.item} data-aos="fade-right"  data-aos-duration="3000">
    <span><strong> 05  Satisfaction Guaranteed</strong> </span>  
    <i class="fas fa-chevron-circle-down" onClick={toggle5}></i>
</div>

<div>
<Collapse isOpen={isOpen5}>
       
       <p>
       Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. Nihil
        anim keffiyeh helvetica, craft beer labore wes anderson cred
        nesciunt sapiente ea proident.
       </p>
     
   </Collapse>
</div>




</div>
    


      </div>
     
       

      </Col>

      </Row>
      
    </Container>
   );
 };
 
 export default Choose;
 
 