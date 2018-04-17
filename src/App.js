import React, { Component } from 'react';
import { Hello } from './components/Hello';
import './App.css';


export class App extends Component {
  
  world = 'World';

  render() {
    return (
        <div className="book-app">
          <Hello who={this.world}></Hello>
        </div>
      );
  }
}