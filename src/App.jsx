import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
const App= () => {

  return (
    <div className="App"> 
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path= "/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
