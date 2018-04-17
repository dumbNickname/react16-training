import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {
    return (
        <div className="book-app">
          <span className="hello">
            Hello World
          </span>
        </div>
      );
      
    // return React.createElement('div', {className: 'book-app'},
    //   React.createElement('span', {className: 'hello'}, 
    //     'Hello World'
    //   ),
    // );
  }
}

export default App;
