import React, { useState } from "react";
import { useBook } from "../../context/BookProvider";
import "./Search.css";
function Search() {
  const { handleSearch, searchBook } = useBook();
  return (
    <div>
      <h1>Search Book</h1>
      <label>
        Search:
        <input
          type="search"
          name="search"
          className="search-bar"
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </label>
      <h2>Books</h2>
      <div className="search-container">
        <div className="book-container">
          {searchBook?.map((book) => (
            <div class="card">
              <img class="card-img" src={book.image} alt="" />
              <div class="card-info">
                <div class="card-title">
                  <div>
                    <h3>{book.name}</h3>
                    <p class="card-description">{book.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
