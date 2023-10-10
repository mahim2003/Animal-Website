import React from 'react'
import firebg from "../assets/firebg.mp4";
import "../styles/Projects.css";
import { Link } from 'react-router-dom';
import Card from "../components/Card.jsx";
import img1 from "../assets/projects/Battleship.jpg";
import img2 from "../assets/projects/ImageProcessor.jpg";
import img3 from "../assets/projects/QuoteGenerator.jpg";
import img4 from "../assets/projects/SurveyForm.jpg";
import img5 from "../assets/projects/BankingWebsite.jpg";


function Projects() {
  return (
    <>
      <div className="video2" >
        <video src={firebg} autoPlay loop muted className="bgcards" />
      </div>
      <div className="cardy-container">
        <div className="container-row1">
          <Card
          title="Battleship"
          imageUrl={img1}
          body="An online version of Battleship with some additional features. Created using PyGame."
          link="https://github.com/mahim2003/Battleship"/>
        </div>
        <div>
          <Card
          title="Image Processor"
          imageUrl={img2}
          body="The image processing software implements various functions such as rotating, scaling and applying filters on an image in a stand-alone interface."
          link="https://github.com/mahim2003/Image-Processor"/>
        </div>
        <div>
          <Card
          title="Quote Generator"
          imageUrl={img3}
          body="A React-based client-side application interacts with a RESTful API by sending an HTTP GET request."
          link="https://github.com/mahim2003/QuoteGenerator"/>
        </div>
        <div class="container-row2">
          <Card
          title="Survey Form"
          imageUrl={img4}
          body="A basic online survey created with the help of HTML and CSS."
          link="https://github.com/mahim2003/Survey"/>
        </div>
        <div>
          <Card
          title="Banking Website"
          imageUrl={img5}
          body="A responsive and scalable website created using JavaScript, HTML and CSS."
          link="https://github.com/mahim2003/Banking-Website"/>
          
        </div>
      </div>
    </>
  )
}

export default Projects
