import React from 'react'
import bgvideo from '../assets/bgimage.mp4'
import "../styles/Navbar.css";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import{Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import styled from "styled-components";
import {Earth} from "../components/earth";

const CanvasContainer = styled.div`
  width:100%;
  height:calc(100vh-50px);
`;

function Home() {
  return (
    <>
      <div className="video1">
        <video src={bgvideo} autoPlay loop muted class="video-bg"/>
      </div>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth/>
          </Suspense>
        </Canvas>
      </CanvasContainer>;
    </>
  )
}

export default Home
