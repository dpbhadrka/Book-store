import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ContextProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./removeBook.css";

export default function RemoveBook() {
  const { books, setBooks } = useContext(Context);
  const [deletedBook, setDeltedBook] = useState("");

  const removeBook = (bookName) => {
    axios
      .post("http://127.0.0.1:8080/api/books/deleteBook", {
        name: bookName,
      })
      .then((response) => {
        toast.success(response.data.message);
        console.log("Book deleted.");
        setDeltedBook(bookName);
      });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/books/getBooks").then((res) => {
      setBooks(res.data.data);
      //   console.log(res.data.data);
    });
  }, [deletedBook]);

  return (
    <div>
      <div className="removeList">
        {books.map((book, index) => (
          <div className="remove-delete-Botton" key={index}>
            <p>{book.name}</p>
            <button
              onClick={() => {
                console.log(book.name);
                removeBook(book.name);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
}
