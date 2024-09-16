import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Register from './Register'

const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AllRoutes;
