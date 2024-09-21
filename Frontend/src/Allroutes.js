import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Register from './Register'
import About from './About';
import Services from './Services';
import Contact from './Contact';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AllRoutes;
