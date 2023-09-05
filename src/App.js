import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from "./context/AppContext";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';

function App() {
  const { changeHandler, submitHandler, search } = useContext(AppContext);

  return (
    <Router>
      <>
        <Navbar changeHandler={changeHandler} submitHandler={submitHandler} search={search}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:vId" element={<Video />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
