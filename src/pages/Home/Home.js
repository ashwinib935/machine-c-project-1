import React from "react";
import BookDetails from "../../component/Header/BookDetails/BookDetails";
import { useBook } from "../../context/BookProvider";
import "./Home.css";
function Home() {
  const { books } = useBook();
  const readBook = books.filter((book) => book.category === "Read");
  const wantToRead = books.filter((book) => book.category === "Want to Read");
  const currentyReading = books.filter(
    (book) => book.category === "Currently Reading"
  );

  return (
    <div className="book-main">
      <div className="">
        <h1>Currenty Reading</h1>
        <div className="book-container">
          {currentyReading?.map((book) => (
            <BookDetails book={book} />
          ))}
        </div>
      </div>
      <div>
        <h1>Read</h1>
        <div className="book-container">
          {readBook?.map((book) => (
            <BookDetails book={book} />
          ))}
        </div>
      </div>
      <div>
        <h1>Want to Read</h1>
        <div className="book-container">
          {wantToRead?.map((book) => (
            <BookDetails book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
