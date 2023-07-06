import React, { useState } from "react";
import "./BookDetails.css";
import { useBook } from "../../../context/BookProvider";
function BookDetails({ book }) {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const { handleFilterChoice } = useBook();
  const handleShowHide = () => {
    setShouldDisplay(!shouldDisplay);
  };
  return (
    <div className="card">
      <img className="card-img" src={book.image} alt="" />
      <div className="card-info">
        <div className="card-title">
          <div>
            <h3>{book.name}</h3>
            <p className="card-description">{book.author}</p>
          </div>
        </div>
        <div className="btn-actions">
          <button onClick={handleShowHide} className="btn-move-to">
            Move to ...
          </button>
          {shouldDisplay && (
            <div className="all-btn">
              <select
                onChange={(e) => handleFilterChoice(e.target.value, book._id)}
                defaultValue={book.category}
              >
                <option value="none" selected disabled hidden>
                  Select Option
                </option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Want to Read">Want to Read</option>
                <option value="Read">Read</option>
                <option value="None">None</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
