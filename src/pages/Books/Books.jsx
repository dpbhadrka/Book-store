import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { Context } from "../../context/ContextProvider";
import Card from "../../components/Card/Card";
import "./books.css";
import axios from "axios";

export default function Books() {
  const { books, setBooks } = useContext(Context);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/books/getBooks").then((res) => {
      setBooks(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="bookSection">
        <div className="bookSection-title">Lorem ipsum dolor sit.</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem
          nam commodi totam deleniti rem quo et culpa fugiat quia.
        </p>
      </section>
      <Search />
      <div className="allBooksContainer">
        <div className="allBooksContainer">
          {books.map((book, index) => (
            <Card
              key={index}
              name={book.name}
              price={book.price}
              description={book.description}
              path={book.image}
              category={book.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
