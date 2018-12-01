import React from "react";
import classnames from 'classnames';

import { BookDetails } from '../BookDetails';
import './BookOverview.css';


const isBookSelected = (book, currentBook) => book === currentBook;

export const BookOverviewDumb = ({ 
  books,
  currentBook,
  onBookSelect,
  onBookChange,
  onBookSave,
}) => (
  <section className="book-overview">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Authors</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <tr onClick={() => onBookSelect(i)} 
            className={classnames({
              'table-active': isBookSelected(book, currentBook),
            })}
            key={book.id}
          >
            <td>{i + 1}</td>
            <td>{book.authors}</td>
            <td>{book.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {(currentBook) && 
      <div>
        <BookDetails book={currentBook} onBookChange={onBookChange}/>
        <button onClick={onBookSave}>Save</button>
      </div>
    }
  </section>
);
