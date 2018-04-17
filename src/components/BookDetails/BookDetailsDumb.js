import React from "react";

import './BookDetails.css';

export const BookDetailsDumb = ({ 
  book, 
  onAuthorsChange, 
  onTitleChange 
}) => (
  <div>
    <form className="book-details-form">
      <div className="form-group">
        <label htmlFor="authors">Authors:</label>
        <input
          value={book.authors}
          onChange={onAuthorsChange}
          id="authors"
          className="form-control"
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          value={book.title}
          onChange={onTitleChange}
          id="title"
          className="form-control"
          type="text"
        />
      </div>
    </form>
    <pre>
      <span>Current Values:</span>
      <span>{JSON.stringify(book)}</span>
    </pre>
  </div>
);
