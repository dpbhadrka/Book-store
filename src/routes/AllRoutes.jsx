import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "../pages/index.js";
import Login from "../pages/LoginPage/LoginPage.jsx";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
