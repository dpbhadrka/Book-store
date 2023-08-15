import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./admin.css";
import AddBook from "../../components/AdminLinks/AddBook/AddBook";
import RemoveBook from "../../components/AdminLinks/RemoveBook/RemoveBook";
import RemoveUser from "../../components/AdminLinks/RemoveUser/RemoveUser";
import EditBooks from "../../components/AdminLinks/EditBooks/EditBooks.jsx";

export default function Admin() {
  const [accessLink, setAccessLink] = useState("addBook");
  return (
    <div>
      {/* <Navbar /> */}
      {/* <h1>Welcom Admin</h1> */}
      <div className="adminAccessLinks">
        <span
          className={accessLink === "addBook" ? "active" : ""}
          onClick={() => {
            setAccessLink("addBook");
          }}
        >
          Add Book
        </span>
        <span
          className={accessLink === "removeBook" ? "active" : ""}
          onClick={() => {
            setAccessLink("removeBook");
          }}
        >
          Romove Book
        </span>
        <span
          className={accessLink === "editBooks" ? "active" : ""}
          onClick={() => {
            setAccessLink("editBooks");
          }}
        >
          Edit Books
        </span>
        <span
          className={accessLink === "removeUser" ? "active" : ""}
          onClick={() => {
            setAccessLink("removeUser");
          }}
        >
          Romove User
        </span>
      </div>

      <div className="accessData">
        {accessLink === "addBook" ? (
          <AddBook />
        ) : accessLink === "removeBook" ? (
          <RemoveBook />
        ) : accessLink === "removeUser" ? (
          <RemoveUser />
        ) : (
          <EditBooks />
        )}
      </div>
    </div>
  );
}
