import React from 'react';
import bgvideo from '../assets/bgimage.mp4';
import "../styles/Navbar.css";
import{Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import styled from "styled-components";
import {Earth} from "../components/Earth";
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';




const CanvasContainer = styled.div`
  width:100%;
  height:100vh;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  
`;

const FrontContainer = styled.div`
position:absolute;
width:100%;
height:100%;
top:40px;
left:0;
background-color:#1756dd10;
display:flex;
flex-direction:column;
align-items:center;
padding-top:10%;
z-index:99;
@media only screen and (max-width: 768px) {
  width: 90%;
  top:0;
  padding-top:20%;
  background-color:transparent;
}
`;
const Title = styled.div`
margin:0;
color:skyblue;
font-weight:700;
font-size:50px;
text-align:center;
@media only screen and (max-width: 768px) {
font-size:30px;
margin-top:150px;
}
`;

const Line = styled.div`
margin:0;
color:mediumaquamarine;
font-weight:700;
font-size:25px;
margin-top:0.5em;
text-align:center;
@media only screen and (max-width: 768px) {
font-size:20px;
}
`;
const Bio = styled.div`
margin:0;
margin-top:2em;
color: mediumaquamarine;
font-size:15px;
line-height:1.5;
font-weight:500;
max-width:60%;
text-align:center;
@media only screen and (max-width: 768px) {
font-size:14px;
}
`;
const ProjectButton= styled.div`
background-color:teal;
color:white;
font-weight:500;
margin-top:2em;
cursor:pointer;
font-size:25px;
padding:0.5rem;
border: 1px solid transparent;
transition: all 300ms ease-in-out;
border-radius:5px;
@media only screen and (max-width: 768px) {
  font-size:20px;
}

&:hover{
  background-color: transparent;
  border: 1px solid teal;
}
`;



function Home() {
  return (
    <>
      <div className="video1">
        <video src={bgvideo} autoPlay loop muted className="video-bg"/>

      </div>
      <CanvasContainer>
        <FrontContainer>
          <Title>My Coding Universe</Title>
          <Line>Portfolio Website</Line>
          <Bio>As an aspiring software engineer, 
            I am very passionate about coming up with innovative ideas and turning them into user-friendly software solutions. I enjoy tackling complex challenges and learning new skills. 
          </Bio>
          <ProjectButton>
            <NavLink to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
              Projects
            </NavLink>
          </ProjectButton>
        </FrontContainer>
        <Canvas>
          <Suspense fallback={<LoadingSpinner/>}>
            <Earth/>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  )
}

export default Home
