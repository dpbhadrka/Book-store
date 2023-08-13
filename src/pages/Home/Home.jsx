import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Navbar from "../../components/Navbar/Navbar";
// import { response } from "express";
const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <h1 style={{ color: "var(--thirty-pr-color)" }}>This is home page.</h1>
      <Footer />
    </>
  );
};

export default Home;
