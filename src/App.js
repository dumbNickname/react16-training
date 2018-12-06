import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { booksApp } from './reducers';
import { BookOverview } from './components/BookOverview';

import './App.css';

const store = createStore(booksApp);

export class App extends Component {
  
  world = 'World';

  render() {
    return (
      <Provider store={store}>
        <div className="book-app">
          <BookOverview/>
        </div>
      </Provider>
      );
  }
}