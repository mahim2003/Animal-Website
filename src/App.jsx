import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./styles/Navbar.css";
import "./styles/App.css";
const App= () => {

  return (
    <div className="App"> 
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
