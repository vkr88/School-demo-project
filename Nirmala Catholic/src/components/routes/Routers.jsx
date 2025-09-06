import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home';
import Gallery from '../Gallery/Gallery';
import About from '../About';
import Contect from '../Contect_Me';
import FullImage from '../Gallery/FullImage';
const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path='/fullimage/id' element={<FullImage />} />
      <Route path="/about" element={<About />} />
      <Route path='/contect' element={<Contect/>} />
    </Routes>

  );
};

export default Routers;
