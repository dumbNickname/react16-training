import React, { Component } from 'react';
import { BookOverview } from './components/BookOverview';
import './App.css';

const loadBooks = (abortController) => fetch('/api/books', { signal: abortController.signal })
  .then(res => {
    if (!res.ok) {
      throw new Error('Something went wrong ...');
    }
    return res.json();
  });

export class App extends Component {
  
  state = {
    books: null,
    isLoading: true,
    error: null,
  };

  abortController = new AbortController();

  componentDidMount() {
    loadBooks(this.abortController)
      .then(books => {
        // setTimeout(() => { // uncomment just for demo
        this.setState({ books, isLoading: false });
        // }, 1000)
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentWillUnmount() {
    this.abortController.abort();
  } 

  render() {
    const { books, isLoading, error } = this.state;
    if (error) {
      return (
        <span>{error.message}</span>
      );
    }
    if (isLoading) {
      return (
        <span>Loading books data... </span>  
      );
    }
    return (
        <div className="book-app">
          <BookOverview books={books}/>
        </div>
      );
  }
}