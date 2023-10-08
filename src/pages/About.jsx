import React from 'react';
import "../styles/About.css";
import FlipCard from '../components/FlipCard';
import MPic from '../assets/MahimPic.jpg';

function About() {
  return (
    <div className='about'>
      <div className='topSection'>
        <h4>Click on the cards to know more about me</h4>
      
      </div>
      <div className="bottomSection">
        <FlipCard />
      </div>
      
    </div>         
  )
}

export default About
