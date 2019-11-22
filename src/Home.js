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

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>

      <div className='list-books-content'>
        <div>
          {Object.keys(shelves).map(shelf => (
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>{shelves[shelf]}</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {books
                     .filter(book => book.shelf === shelf)
                     .map(book => (
                       <li key={book.id}>
                         <Book
                           book={book}
                           changeShelf={changeShelf}
                           actualShelf={shelf}
                           />
                       </li>
                     ))};
                </ol>
              </div>
            </div>
          ))};
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