import React, { useState, useEffect } from 'react';
import {NavLink } from 'react-router-dom';
import './Navbar.css';
import img  from './logos.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' exact activeClassName='active' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={img} height='120px' alt="nextgen"  />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' exact activeClassName='active' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
                exact activeClassName='active'
              >
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
                exact activeClassName='active'
              >
                Products
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
                exact activeClassName='active'
              >
                About
              </NavLink>
            </li>
            
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
                exact activeClassName='active'
              >
               Contact
              </NavLink>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
