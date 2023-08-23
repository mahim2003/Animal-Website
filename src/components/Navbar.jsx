import React from 'react';
import logo from '../assets/logo-color.png';
import {Link} from 'react-router-dom';
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="left">
            {/*<img src={logo}/>*/}
        </div>
        <div className="right">
            <Link to="/">Home</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/explore">Explore</Link>
        </div>
      
    </div>
  )
}

export default Navbar

