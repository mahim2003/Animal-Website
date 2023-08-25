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
        
      <h3>WILDSTATISTICS</h3>  
        
        <div className={openLinks ? "nright" : "right"} >
            <Link to="/">Home</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/explore">Explore</Link>
            </div>
        <button className="icon" onClick={toggleNavbar}>
          <FaBars/>               
        </button>
        
      
    </div>
  )
}

export default Navbar

