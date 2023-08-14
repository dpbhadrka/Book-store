import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "../pages/index.js";
import Login from "../pages/LoginPage/LoginPage.jsx";
import Books from "../pages/Books/Books.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import { Context } from "../context/ContextProvider.jsx";

const AllRoutes = () => {
  const { userRole, setUserRole } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        {userRole === "Admin" ? (
          <Route path="/" element={<Admin />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
