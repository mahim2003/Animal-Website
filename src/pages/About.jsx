import React from 'react';
import "../styles/About.css";
import FlipCard from '../components/FlipCard';
import SFU from '../assets/about/SFUpic.jpg';
import Burnaby from '../assets/about/Burnaby.jpg';
import cjsf from '../assets/about/cjsf.jpg';
import lang from '../assets/about/languages.jpg';
import aboutbg from '../assets/aboutbg.mp4';
import picture from '../assets/picture.png';


function About() {
  return (
    <div className='about'>
      <div className='topSection'>
        <h4>Click on the cards to know more about me</h4>
        <video src={aboutbg} autoPlay loop muted className='aboutbg'/>
        <img className='image3' src={picture} alt="Fallback Image" />
      
      </div>
      <div className="bottomSection">
        
        <FlipCard frontText="Which University do I attend?" 
         backContent={{
          text: "Simon Fraser University",
          image: SFU,
        }}
        />
        <FlipCard frontText="Where do I live?" 
          backContent={{
          text: "Burnaby, British Columbia",
          image: Burnaby,
        }}
        
        />
        <FlipCard frontText="What languages can I code in?" 
          backContent={{
          text: "",
          image: lang,
        }}
       
        />
        <FlipCard frontText="Where do I currently work?" 
          backContent={{
          text: "Front-end Web-designer, CJSF 90.1 FM",
          image: cjsf,
        }}
        
        />
      </div>
      
    </div>         
  )
}

export default About
