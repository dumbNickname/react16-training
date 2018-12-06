import { connect } from 'react-redux';
 
import { selectBook } from '../../actions'
import { BookOverviewDumb } from './BookOverviewDumb';


const mapStateToProps = state => {
  return {
    books: state.books,
    currentBook: state.currentBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBookSelect: id => {
      dispatch(selectBook(id));
    },
  };
}


export const BookOverview = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookOverviewDumb);
