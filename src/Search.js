import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

    class Search extends Component {
      state = {
        query: '',
        wantedBooks: []
      }

      updateQuery = (query) => {
        this.setState({
          query: query
        })
        this.updateWantedBooks(query);
      }

      updateWantedBooks = (query) => {
        if (query) {
          BooksAPI.search(query).then((wantedBooks) => {
            if (wantedBooks.error) {
              this.setState({ wantedBooks: [] });
            } else if (query !== this.state.query) {
              this.setState( { wantedBooks: [] });
            } else {
              this.setState({ wantedBooks: wantedBooks });
            }            
          })
        } else {
          this.setState({ wantedBooks: [] });
        }        
      }

        render() {
            return (
                <div className='search-books'>
                <div className='search-books-bar'>

                  <Link
                    to='/'
                    className='close-search'
                  >Close</Link>

                <div className='search-books-input-wrapper'>

                  <DebounceInput 
                    debounceTimeout={1000}
                    type='text'
                    placeholder='Search by title or author'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />

                </div>
                </div>
                <div className='search-books-results'>

                  <ol className='books-grid'>
                    {
                      this.state.wantedBooks.map(wantedBook => {
                        let shelf = 'none';

                        this.props.books.map(book => (
                          book.id === wantedBook.id ?
                          shelf = book.shelf :
                          ''
                        ));

                        return (
                          <li key={wantedBook.id}>
                            <Book
                              book={wantedBook}
                              changeShelf={this.props.changeShelf}
                              actualShelf={shelf}
                            />
                          </li>
                        );
                      })
                    }

                  </ol>

                </div>
                </div>
            )
        }
    }

export default Search;