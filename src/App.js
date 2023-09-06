import React, { useContext } from 'react';
import { AppContext } from "./context/AppContext";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import Channel from './components/Channel';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:vId" element={<Video />} />
          <Route path="/channel/:cId" element={<Channel />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
