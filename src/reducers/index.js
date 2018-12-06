import {
  EDIT_TITLE, 
  EDIT_AUTHORS,
  SELECT_BOOK,
  SAVE_BOOK,
} from '../actions';

function selectedBookIndex (state, action) {
  switch (action.type) {
    case SELECT_BOOK:
      const { id } = action;
      const book = state.books.find(book => book.id === id);
      return state.books.indexOf(book);
    default:
      return state.selectedBookIndex;
  }
}


function books (state, action) {
  switch (action.type) {
    case SAVE_BOOK:
      const newBooks = [...state.books]; 
      newBooks[state.selectedBookIndex] = state.currentBook;
      return newBooks;
    default:
      return state.books;
  }
}

function currentBook (state, action) {
  switch (action.type) {
    case SELECT_BOOK:
      const { id } = action;
      return state.books.find(book => book.id === id);
    case EDIT_AUTHORS:
      const { authors } = action;
      return {...state.currentBook, authors };
    case EDIT_TITLE:
      const { title } = action;
      return {...state.currentBook, title };
    default:
      return state.currentBook;
  }
}

const initialBooks = [
  {id: 1, authors: 'a1', title: 't1'},
  {id: 2, authors: 'a2', title: 't2'},
];

const initialState = {
  books: initialBooks,
  selectedBookIndex: -1,
  currentBook: null,
};

export const booksApp = (state = initialState, action) => {
  return {
    books: books(state, action),
    selectedBookIndex: selectedBookIndex(state, action),
    currentBook: currentBook(state, action),
  };
}