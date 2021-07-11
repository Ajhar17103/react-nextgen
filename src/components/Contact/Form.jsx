import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Forms = (props) => {
  return (
    <div style={{width:'99%'}}>
<Form >
    <div className='text-center  m-4'>
        <h1>We are ready to Development</h1>
        <h4>Lets Talk With Us About Your Project .</h4>
    </div>
      <FormGroup row className='ml-auto w-75'>
        
        <Col sm={10} md={8}>
          <Input type=" Name" name=" Name"  placeholder="Enter your Name" />
        </Col>
      </FormGroup>
      <FormGroup row className='ml-auto  w-75'>
      
        <Col sm={10} md={8}>
          <Input type="email" name="email"   placeholder=" Enter your E-mail" />
        </Col>
      </FormGroup>
      
      <FormGroup row className='ml-auto w-75' >
         
        <Col sm={10} md={8} >
          <Input style={{height:'200px'}} type="textarea" name="text" placeholder='Write Your Comment' />
        </Col>
      </FormGroup>
     
       
         
           
       
         
      <FormGroup check row className='ml-auto w-75'>
        <Col sm={{ size: 10, offset:2 }} >
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    
  );
}

export default Forms;


