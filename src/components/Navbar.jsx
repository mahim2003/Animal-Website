import React, {useState} from 'react';
import logo from '../assets/logo-color.png';
import {NavLink} from 'react-router-dom';
import "../styles/Navbar.css";
import {FaBars} from "react-icons/fa";

function Navbar() {
  const[openLinks, setOpenLinks]= useState(false);
  const toggleNavbar = () => {
    setOpenLinks(prevLinks=>!prevLinks);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        
        <h3>MAHIM CHAUDHARY</h3>  
      </div>
      <div className="navbar-right">
        <button className="icon" onClick={toggleNavbar}>
            <FaBars/>               
          </button>
          
          <ul className={openLinks ? "open" : ""} >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
          </ul>
      </div>              
    </div>
  )
}

export default Navbar

