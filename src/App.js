import React, { Component } from 'react';
import { BookOverview } from './components/BookOverview';
import './App.css';


export class App extends Component {
  
  world = 'World';

  render() {
    return (
        <div className="book-app">
          <BookOverview/>
        </div>
      );
  }
}