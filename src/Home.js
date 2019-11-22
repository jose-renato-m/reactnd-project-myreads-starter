import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Book from './Book';

const propTypes = {};
const defaultProps = {};

function Home (props) {
  const [ , setShowSearchPage] = useState(false);

  const renderBook = (book) => (
    <li key={book.id} >
      <Book book={book} changeShelf={props.changeShelf} actualShelf='currentlyReading' />
    </li>
  );
  const renderBookShelf = (books, title) => (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>

      <div className='bookshelf-books'>
        <ol className='books-grid'> {books.map(renderBook)}</ol>
      </div>
    </div>
  );
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>

      <div className='list-books-content'>
        <div>
           {renderBookShelf(props.books.filter((book) => book.shelf === 'currentlyReading'), 'Currently Reading')}
           {renderBookShelf(props.books.filter((book) => book.shelf === 'wantToRead'), 'Want to Read')}
           {renderBookShelf(props.books.filter((book) => book.shelf === 'read'), 'Read')}
        </div>
      </div>

      <div className='open-search'>
        <Link to='/search'>
          <button onClick={() => setShowSearchPage(true)}>
            Add a book
          </button>
        </Link>
      </div>
    </div>
  );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;