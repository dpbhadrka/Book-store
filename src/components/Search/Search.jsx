import React, { useContext, useState } from "react";
import "./search.css";
import Card from "../Card/Card";
import { Context } from "../../context/ContextProvider";
import { ToastContainer } from "react-toastify";

export default function Search(props) {
  const { books, setBooks } = useContext(Context);
  const [filteredResults, setfilteredResults] = React.useState([]);
  const [resultOfSearch, setRusultOfSearch] = useState(false);

  const handleSearch = (query) => {
    if (query) {
      console.log("Query: ", query);
      // Filter the items based on the search query
      const searchedResult = books.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      if (searchedResult.length === 0) {
        setRusultOfSearch(true);
        setfilteredResults(searchedResult);
      } else {
        setfilteredResults(searchedResult);
        setRusultOfSearch(false);
        console.log(searchedResult.length);
      }
    } else {
      setRusultOfSearch(false);
      setfilteredResults([]);
    }
  };
  return (
    <>
      <div className="search-container" style={props.style}>
        <div className="search">
          <input
            type="search"
            id="header-search"
            placeholder="what are you looking for...."
            autoComplete="off"
            onChange={(e) => {
              handleSearch(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div
        className="searchResult"
        style={{ display: resultOfSearch === false ? "none" : "block" }}
      >
        Sorry !! Book is not avilabale.
      </div>
      <div
        style={{ display: resultOfSearch === false ? "block" : "none" }}
        className="allBooksContainer"
      >
        <div className="allBooksContainer">
          {filteredResults.map((book, index) => (
            <Card
              key={index}
              name={book.name}
              price={book.price}
              description={book.description}
              path={book.base64image}
              category={book.category}
            />
          ))}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          pauseOnHover
        />
      </div>
    </>
  );
}
