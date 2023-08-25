import React from 'react'
import bgvideo from '../assets/bgimage.mp4'
import "../styles/Navbar.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="video1">
      <video src={bgvideo} autoPlay loop muted class="video-bg"/>
    </div>
  )
}

export default Home
