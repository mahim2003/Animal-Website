import React from 'react';
import Mahimpdf from "../assets/MahimChaudhary_Resume_Latest.pdf";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const PageWrapper = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
`;

const ProjectButton = styled.div`
  background:purple;
  color: white;
  font-weight: 500;
  margin-top: 2em;
  cursor: pointer;
  font-size: 25px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  padding: 0.5rem;
  border: 1px solid red;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  &:hover {
    background: transparent;
    transform: scale(1.05);
  }
`;

function Resume() {
  return (
    <PageWrapper>
      <a href={Mahimpdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <ProjectButton>
          View Resume
        </ProjectButton>
      </a>
    </PageWrapper>      
  )
}

export default Resume

