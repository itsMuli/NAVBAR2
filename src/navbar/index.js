import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarelements';
const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
          <img  className="images" src={require('../images/logo2.jpg')} 
          alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/registration" activeStyle>
            Registration
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink> 
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/Signin'>Sign In</NavBtnLink>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
     </Nav>
    </>
  )
}

export default Navbar;