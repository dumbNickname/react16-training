import React from "react";

import { FormGroup } from '../FormGroup';
import { WithBetterDiscoEffect as WithDiscoEffect } from '../withBetterDiscoEffect';
import './BookDetails.css';


export const BookDetailsDumb = ({ 
  book, 
  onAuthorsChange, 
  onTitleChange 
}) => (
  <div>
    <form className="book-details-form">
      <WithDiscoEffect>
        {({bgColor, fontColor}) => (
          <FormGroup bgColor={bgColor} fontColor={fontColor}>
            <label htmlFor="authors">Authors:</label>
            <input
              value={book.authors}
              onChange={onAuthorsChange}
              id="authors"
              className="form-control"
              type="text"
            />
          </FormGroup>
        )}
      </WithDiscoEffect>

      <FormGroup>
        <label htmlFor="title">Title:</label>
        <input
          value={book.title}
          onChange={onTitleChange}
          id="title"
          className="form-control"
          type="text"
        />
      </FormGroup>
    </form>
    <pre>
      <span>Current Values:</span>
      <span>{JSON.stringify(book)}</span>
    </pre>
  </div>
);
