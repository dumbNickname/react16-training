import { connect } from 'react-redux';

import { editAuthors, editTitle, saveBook } from '../../actions'
import { BookDetailsDumb } from './BookDetailsDumb';


const mapStateToProps = state => {
  return {
    book: state.currentBook,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthorsChange: e => {
      const authors = e.target.value;
      dispatch(editAuthors(authors));
    },
    onTitleChange: e => {
      const title = e.target.value;
      dispatch(editTitle(title));
    },
    onBookSave: () => {
      dispatch(saveBook());
    }
  };
}

export const BookDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsDumb);