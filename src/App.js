import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';
import ContactPage from './components/Contact/ContactPage';
import WebDev from './components/ReadMore/WebDev';
import AppDev from './components/ReadMore/AppDev';
import SoftDev from './components/ReadMore/SoftDev';
import JobPortal from './components/ReadMore/JobPortal';
import Berp from './components/ReadMore/BERP';
import ITConsulancy from './components/ReadMore/ITConsultancy';
import ECommerce from './components/ReadMore/ECommerce';
 

 

function App() {
  return (
    <>
      <Router basename="/react-nextgen" >
        <Navbar />
        
  

        <Switch>
          <Route path='/' exact component={Home}  />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/web' component={WebDev}/>
          <Route path='/app' component={AppDev}/>
          <Route path='/software' component={SoftDev}/>
          <Route path='/jobportal' component={JobPortal}/>
          <Route path='/erp' component={Berp}/>
          <Route path='/itconsultancy' component={ITConsulancy}/>
          <Route path='/commerce' component={ECommerce}/>
     
        </Switch>
      </Router>
    </>
  );
}

export default App;
