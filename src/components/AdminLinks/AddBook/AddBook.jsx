import React, { useContext, useState } from "react";
import "./addBook.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function AddBook() {
  const [base64String, setBase64String] = useState("");

  const Base64Converter = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64String(e.target.result);
        console.log(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const addBookToDatabase = (event) => {
    event.preventDefault();
    const data = new FormData(document.querySelector(".BookData"));
    if (
      data.get("bookName").trim() != "" &&
      data.get("bookPrice").trim() != 0 &&
      data.get("bookCategory").trim() != "" &&
      data.get("bookDescription") != ""
    ) {
      axios
        .post("http://127.0.0.1:8080/api/books/addBook", {
          name: data.get("bookName"),
          price: data.get("bookPrice"),
          category: data.get("bookCategory"),
          image: base64String,
          description: data.get("bookDescription"),
        })
        .then((response) => {
          console.log(response.data.message);
          toast.success(response.data.message);
        });
    } else {
      toast.error("Enter all the filed.");
    }
  };
  return (
    <div>
      <form className="BookData">
        <fieldset className="fieldSet">
          <legend>Enter Book Information</legend>
          <div className="bookProperty bookNamePrice">
            <input
              type="text"
              name="bookName"
              id="BookName"
              placeholder="Name.."
              required
              autoComplete="off"
            />
            <input
              type="number"
              autoComplete="off"
              name="bookPrice"
              id="price"
              placeholder="Price.."
              required
            />
          </div>
          <div className=" bookProperty bookDescription">
            <input
              autoComplete="off"
              type="text"
              name="bookCategory"
              id="bookCategory"
              placeholder="Category..."
              required
            />
          </div>
          <div className="bookProperty bookDescription">
            <input
              autoComplete="off"
              type="file"
              name="bookImage"
              id="bookImage"
              onChange={Base64Converter}
              placeholder="Image Link..."
              required
            />
          </div>
          <div className="bookProperty bookDescription">
            <input
              autoComplete="off"
              type="text"
              name="bookDescription"
              id="bookDesctiption"
              placeholder="Desctiption"
              required
            />
          </div>
          <div className="submitButton">
            <button
              type="submit"
              onClick={(e) => {
                addBookToDatabase(e);
              }}
            >
              Add Book
            </button>
          </div>
        </fieldset>
      </form>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
