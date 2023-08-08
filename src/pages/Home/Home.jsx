import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/Navbar/ResponsiveAppBar";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
// import { response } from "express";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users/getUser").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);
  return (
    <>
      <ResponsiveAppBar />
      <Search />
      <h1>This is home page.</h1>
      <Footer />
    </>
  );
};

export default Home;
