import React, { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";
import Card from "../Card/Card";

export default function Search() {
  const [bookList, setbookList] = React.useState([]);
  const [filteredResults, setfilteredResults] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/book/all")
      .then((res) => {
        // console.table(res.data.result);
        setbookList(res.data.result);
      });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      console.log("Query: ", query);
      // Filter the items based on the search query
      const searchedResult = bookList.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredResults(searchedResult);
    } else {
      const searchedResult = [];
      setfilteredResults(searchedResult);
    }
  };
  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            type="search"
            id="header-search"
            placeholder="Books"
            autoComplete="off"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
        {/* <div className="searchButton" onClick={handleSearch}>
          Search
        </div> */}
      </div>
      <div className="allBooksContainer">
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
      </div>
    </>
  );
}
