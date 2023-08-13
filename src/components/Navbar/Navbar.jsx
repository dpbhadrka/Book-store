import React, { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";
import "./navbar.css";
import ThemeProvider from "../Theme/ThemProvider";

export default function Navbar() {
  const pages = ["Home", "Books", "Cart", "About", "Login"];

  return (
    <div className="navbar-container">
      <div className="title">
        <AutoStoriesIcon />
        <p className="title">BookHub</p>
      </div>
      <div className="option">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
          >
            <span>{page}</span>
          </Link>
        ))}
      </div>

      <div className="themeButton">
        <ThemeProvider />
      </div>
    </div>
  );
}
