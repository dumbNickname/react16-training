import React, { Component } from "react";

import { BookOverviewDumb } from './BookOverviewDumb';

export class BookOverview extends Component {

  state = {
    books: [
      {id: 1, authors: 'a1', title: 't1'},
      {id: 2, authors: 'a2', title: 't2'},
    ],
    selectedBookIndex: -1, 
  };

  onBookSelect = (i) => {
    this.setState({
      selectedBookIndex: i,
    });
  }

  onBookSave = (updatedBook) => {
    this.setState((prevState) => ({
        books: prevState.books.map((b) => (b.id === updatedBook.id) ? updatedBook : b ),
      }
    ));
  }

  render() {
    return (
      <BookOverviewDumb 
        books={this.state.books}
        currentBook={this.state.books[this.state.selectedBookIndex]}
        onBookSelect={this.onBookSelect}
        onBookSave={this.onBookSave}
      />
    );
  }
}
