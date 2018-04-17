import React, { Component } from 'react';
import { HelloWorld } from './components/HelloWorld'
import './App.css';

export class App extends Component {

  render() {
    return (
        <div className="book-app">
          <HelloWorld></HelloWorld>
        </div>
      );
  }
}