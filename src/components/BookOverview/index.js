import React, { Component } from "react";

import { BookOverviewDumb } from './BookOverviewDumb';

export class BookOverview extends Component {

  state = {
    books: this.props.books || [],
    selectedBookIndex: -1,
    selectedBook: null,
  };

  onBookSelect = (i) => {
    this.setState(prevState => ({
      selectedBookIndex: i,
      selectedBook: prevState.books[i],
    }));
  }

  onBookChange = (updatedBook) => {
    this.setState(prevState => ({
      selectedBook: { ...prevState.selectedBook, ...updatedBook },
    }));
  }

  onBookSave = () => {
    this.setState(prevState => {
      const books = [...prevState.books];
      books[prevState.selectedBookIndex] = prevState.selectedBook;
      return {
        books,
      };
    });
  }

  render() {
    return (
      <BookOverviewDumb 
        books={this.state.books}
        currentBook={this.state.selectedBook}
        onBookSelect={this.onBookSelect}
        onBookChange={this.onBookChange}
        onBookSave={this.onBookSave}
      />
    );
  }
}
