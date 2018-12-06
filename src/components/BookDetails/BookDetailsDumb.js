import React from "react";

import { FormGroup } from '../FormGroup';
import { withDiscoEffect } from '../withDiscoEffect';
import { WithBetterDiscoEffect } from '../withBetterDiscoEffect';
import './BookDetails.css';


const DiscoFormGroup = withDiscoEffect(FormGroup);

export const BookDetailsDumb = ({ 
  book, 
  onAuthorsChange, 
  onTitleChange 
}) => (
  <div>
    <form className="book-details-form">
 
      <DiscoFormGroup>
        <label htmlFor="authors">Authors:</label>
        <input
          value={book.authors}
          onChange={onAuthorsChange}
          id="authors"
          className="form-control"
          type="text"
        />
      </DiscoFormGroup>

      <WithBetterDiscoEffect>
        {({bgColor, fontColor}) => (
          <FormGroup bgColor={bgColor} fontColor={fontColor}>
            <label htmlFor="title">Title:</label>
            <input
              value={book.title}
              onChange={onTitleChange}
              id="title"
              className="form-control"
              type="text"
            />
          </FormGroup>
        )}
      </WithBetterDiscoEffect>
    </form>
    <pre>
      <span>Current Values:</span>
      <span>{JSON.stringify(book)}</span>
    </pre>
  </div>
);
