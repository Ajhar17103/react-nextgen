import React,{useEffect} from 'react'
import { Container,Row, Col ,CardImg,Card} from 'reactstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Team from '../Our Profile/Team/Team';
import Management from '../Our Profile/Management/Management';

const styles={
       containerStyle:{
        
         width:'90%',
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
        textAlign:'#032B47',
       background:'black'
       }
}
 
 const About = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      easing:'ease',
      duration:'3000'
    })
  })
   return (
     <>
    <Container style={styles.containerStyle}>
      <Row>

      <Col sm={12}  md={5} data-aos="fade-up"
     data-aos-duration="3000" className='pt-3'>

       <Card>
       <CardImg top width="100%" height="500px" src="https://th.bing.com/th/id/R458fdf9578a58ecb17c7a817d5feb4e2?rik=toLAmfHEGlpoIg&pid=ImgRaw" alt="Card image cap" />
       </Card>


      </Col>

      <Col sm={12}  md={7} className='pt-3' >
      <div style={{paddingLeft:'30px'}}>

     
      <div style={styles.aboutDiv}  data-aos="zoom-in"
    data-aos-duration="1000">
         <h1>  <strong>Who we are</strong> </h1>
      </div>


      <div  >
      <p data-aos="zoom-in-up"  data-aos-duration="1300"> <b>NEXTGEN Innovation Ltd is an organization that distinguishes and advances people who are inspired, live with veracity, and share our core mission of working for the good of others.
Our fortitude is to make an assessable impact on human flourishing in the world. We believe that what we make and how we work should make it a little bit healthier to be thriving: for us, our clients, and their customers.</b></p>

   <p data-aos="zoom-in-up"  data-aos-duration="1800"> <i class="fas fa-check"></i> <b>We specialize in Sales, Support and Maintenance of Health Care Solution,Hospital Management System, Offshore Software Development</b> </p>



<p data-aos="zoom-in-up"  data-aos-duration="2300">  <i class="fas fa-check"></i><b> Software Outsourcing Services, Software Product Development, Security Surveillance Solutions </b></p>

<p data-aos="zoom-in-up"  data-aos-duration="2600">  <i class="fas fa-check"></i> <b>Custom Software Development, , IT Consulting, Web Application Development to Small and Midsize Businesses (SMBs), Corporate Offices, Multinational Companies, NGOs, and Government institutions in Bangladesh. </b></p>

<p data-aos="zoom-in-up"  data-aos-duration="3000"> <b>
We are a group of young and experienced energetic professionals working as the driving force behind the NEXTGEN Innovation Ltd. since its inception in Bangladesh. Within short span of time, we have already earned a good reputation by our own sincere effort and hard work.</b></p>

</div>
    


      </div>
     
       

      </Col>

      </Row>
    </Container>
    <Management/>
    <Team/>
    </>
   );
 };
 
 export default About;
 
 