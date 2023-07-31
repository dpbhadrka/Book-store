import React from "react";
import './notfound.css';

const NotFound = () => {
  return (
    <section className="page-not-found-container">
      <main class="page-not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>
          Go back to the <a href="/">homepage</a> or try searching.
        </p>
      </main>
    </section>
  );
};

export default NotFound;
