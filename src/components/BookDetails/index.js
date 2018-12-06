import React, { Component } from "react";

import { BookDetailsDumb } from './BookDetailsDumb';

export class BookDetails extends Component {

  changeBook = (newBook) => {
    this.props.onBookChange && this.props.onBookChange(newBook);
  }

  onAuthorsChange = (e) => {
    const authors = e.target.value;
    this.changeBook({...this.props.book, authors });
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.changeBook({...this.props.book, title });
  }

  render() {
    const { book, onBookSave } = this.props;

    return (
      <BookDetailsDumb
        book={book} 
        onAuthorsChange={this.onAuthorsChange} 
        onTitleChange={this.onTitleChange} 
        onBookSave={onBookSave}
      />
    );
  }
}
