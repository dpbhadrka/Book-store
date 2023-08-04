import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/Navbar/ResponsiveAppBar";
import axios from "axios";
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
      <h1>This is home page.</h1>
    </>
  );
};

export default Home;
