import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function Home ({books, changeShelf}) {  
  const [ , setShowSearchPage] = useState(false);
  const shelves = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
  };

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

export default Home;