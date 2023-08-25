import React, {useState} from 'react';
import logo from '../assets/logo-color.png';
import {Link} from 'react-router-dom';
import "../App.css";
import {FaBars} from "react-icons/fa";

function Navbar() {
  const[openLinks, setOpenLinks]= useState(false);
  const toggleNavbar = () => {
    setOpenLinks(prevLinks=>!prevLinks);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        
        <h3>WILDSTATISTICS</h3>  
      </div>
      <div className="navbar-right">
        <button className="icon" onClick={toggleNavbar}>
            <FaBars/>               
          </button>
          
          <ul className={openLinks ? "open" : ""} >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cities">Cities</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
          </ul>
      </div>              
    </div>
  )
}

export default Navbar

