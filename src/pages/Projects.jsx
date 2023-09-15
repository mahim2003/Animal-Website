import React from 'react'
import Navbar from "../components/Navbar";
import firebg from "../assets/firebg.mp4";


function Projects() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="video2" style={{ height: "100%", width: "100%" }}>
        <video src={firebg} autoPlay loop muted className="bgcards" style={{
            zIndex: -1,
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            overflow: 'hidden',
          }}/>

      </div>
    </div>
  )
}

export default Projects
