import React, { Component } from 'react';
import { BookDetails } from './components/BookDetails';
import './App.css';


export class App extends Component {
  
  world = 'World';

  render() {
    return (
        <div className="book-app">
          <BookDetails/>
        </div>
      );
  }
}