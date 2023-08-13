import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  // console.log(filterdBooks);
  // console.log(books);

  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/book/all")
      .then((res) => {
        setBooks(res.data.result);
        // setFilteredBooks(res.data.result);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
