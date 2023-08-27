import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cities from './pages/Cities';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
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
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/explore" element={<Explore/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App
