import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [books, setBooks] = useState([]);
  const [userRole, setUserRole] = useState("User");
  // console.log(filterdBooks);
  // console.log(books);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/books/getBooks").then((res) => {
      console.log(res.data);
      setBooks(res.data.data);
      // setFilteredBooks(res.data.result);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        books,
        setBooks,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
