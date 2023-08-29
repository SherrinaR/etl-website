import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BibleStudy from './components/pages/BibleStudy';
import Events from './components/pages/Events';
import Mission from './components/pages/Mission';
import Give from './components/pages/Give';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/biblestudy' element={<BibleStudy />} />
          <Route path='/events' element={<Events />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/give' element={<Give />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
