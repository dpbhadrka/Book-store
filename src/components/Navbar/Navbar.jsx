import React, { useContext, useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";
import "./navbar.css";
import ThemeProvider from "../Theme/ThemProvider";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import Admin from "../../pages/Admin/Admin";

export default function Navbar() {
  const navigateToHome = useNavigate();
  const pages = ["Home", "Books", "Cart", "About", "Login"];
  const { userRole, setUserRole } = useContext(Context);

  return userRole === "User" ? (
    <div className="navbar-container">
      <div className="title">
        <AutoStoriesIcon />
        <p className="title">BookHub</p>
      </div>
      <div className="option">
        <span
          onClick={() => {
            navigateToHome("/");
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigateToHome("/books");
          }}
        >
          Books
        </span>
        <span
          onClick={() => {
            navigateToHome("/cart");
          }}
        >
          Cart
        </span>
        <span
          onClick={() => {
            navigateToHome("/about");
          }}
        >
          About
        </span>
        <span
          onClick={() => {
            navigateToHome("/login");
          }}
        >
          Login
        </span>
        <span
          style={{ display: userRole === "Admin" ? "inline" : "none" }}
          onClick={() => {
            navigateToHome("/admin");
          }}
        >
          Admin
        </span>
      </div>

      <div className="themeButton">
        <ThemeProvider />
      </div>
    </div>
  ) : (
    <Admin />
  );
}
