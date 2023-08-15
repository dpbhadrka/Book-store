import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ContextProvider";
import "./editBook.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function EditBooks() {
  const { books, setBooks } = useContext(Context);
  const [isEditVisible, setEditVisible] = useState(false);
  const [targetPage, setTargetPage] = useState("");
  const [base64String, setBase64String] = useState("");
  const [updatedBook, setUpdatedBook] = useState([
    {
      name: "",
      price: 0,
      category: "",
      description: "",
      image: "",
      originalName: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/books/getBooks").then((res) => {
      setBooks(res.data.data);
      //   console.log(res.data.data);
    });
  }, []);

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

  const editBook = (targetBook) => {
    setUpdatedBook({
      name: targetBook.name,
      price: targetBook.price,
      description: targetBook.description,
      image: targetBook.image,
      category: targetBook.category,
      originalName: targetBook.name,
    });

    setEditVisible(!isEditVisible);
    console.log(targetBook.price);
    setTargetPage(targetBook.name);
  };

  const handleInputChange = (index, field, event) => {
    if (field === "image") {
      setUpdatedBook((prevUpdatedBook) => ({
        ...prevUpdatedBook,
        image: base64String,
      }));
    } else {
      const value = event.target.value;
      setUpdatedBook((prevUpdatedBook) => ({
        ...prevUpdatedBook,
        [field]: value,
      }));
    }
  };

  const updateChanges = () => {
    console.log(updatedBook.name);
    console.log(updatedBook.price);
    console.log(updatedBook.category);
    console.log(updatedBook.description);
    // console.log(updatedBook.image);

    axios
      .post("http://127.0.0.1:8080/api/books/updateBook", {
        originalName: updatedBook.originalName,
        name: updatedBook.name,
        price: updatedBook.price,
        category: updatedBook.category,
        image: updatedBook.image,
        description: updatedBook.description,
      })
      .then((res) => {
        toast.success(res.data.message);
        setBooks(res.data.allBooks);
        console.table(res.data.message);
      });

    setEditVisible(!isEditVisible);
  };
  return (
    <div>
      <div className="removeList">
        {books.map((book, index) => (
          <div className="editBooks" key={index}>
            <div className="remove-delete-Botton editBook-container">
              <p>
                {index + 1}: {book.name}
              </p>
              <button
                onClick={() => {
                  console.log(book.name);
                  editBook(book);
                }}
              >
                Edit
              </button>
            </div>
            <div
              style={{
                display:
                  isEditVisible === true && targetPage === book.name
                    ? "flex"
                    : "none",
              }}
              className="bookAllInfo"
            >
              <div className="editBookInformation">
                <fieldset className="editBookInformation">
                  <legend>Edit Book Information</legend>
                  <div className="disFlex">
                    <div>
                      <p>Name:</p>
                      <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        value={updatedBook.name}
                        onChange={(event) => {
                          handleInputChange(index, "name", event);
                        }}
                      />
                    </div>
                    <div>
                      <p> Price:</p>
                      <input
                        autoComplete="off"
                        type="number"
                        name="price"
                        // value={book.price}
                        value={updatedBook.price}
                        onChange={(event) => {
                          handleInputChange(index, "price", event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="disFlex">
                    <div>
                      <p>Description: </p>
                      <input
                        autoComplete="off"
                        type="text"
                        name="description"
                        value={updatedBook.description}
                        onChange={(event) => {
                          handleInputChange(index, "description", event);
                        }}
                      />
                    </div>
                    <div>
                      <p>Categoty</p>
                      <input
                        autoComplete="off"
                        type="text"
                        name="category"
                        value={updatedBook.category}
                        onChange={(event) =>
                          handleInputChange(index, "category", event)
                        }
                      />
                    </div>
                  </div>
                  <div className="disFlex">
                    <div>
                      <p>Image:</p>
                      <img src={updatedBook.image} alt={book.name} />
                      <input
                        autoComplete="off"
                        type="file"
                        name="image"
                        onChange={(event) => {
                          Base64Converter(event);
                          handleInputChange(index, "image", event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="submitButton buttonContainer">
                    <button type="submit" onClick={updateChanges}>
                      Update Changes
                    </button>
                    <button
                      type="submit"
                      onClick={() => setEditVisible(!isEditVisible)}
                    >
                      Cancel
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}
