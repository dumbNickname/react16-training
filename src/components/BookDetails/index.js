import React, { Component } from "react";

import { BookDetailsDumb } from './BookDetailsDumb';

export class BookDetails extends Component {
  state = {
    book: this.props.book || { 
      authors: '',
      title: ''
    },
  }

  onAuthorsChange = (e) => {
    const authors = e.target.value;
    this.setState((prevState, props) => ({
      book: {...prevState.book, authors },
    }));
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState((prevState, props) => ({
      book: {...prevState.book, title },
    }));
  }

  render() {
    const { book } = this.state;
    const { onBookSave } = this.props;

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
