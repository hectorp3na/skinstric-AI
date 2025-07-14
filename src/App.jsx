
import React from 'react';
import { Routes, Route }  from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Result from './pages/Result';
import Select from './pages/Select';
import Summary from './pages/Summary';
import Camera from './pages/Camera';
import Capture from './pages/Capture';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/result" element={<Result />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/camera/capture" element={<Capture />} />
        <Route path="/select" element={<Select />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
