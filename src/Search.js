import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
                <div className="search-books">
                <div className="search-books-bar">

                  <Link
                    to="/"
                    className="close-search"
                  >Close</Link>

                <div className="search-books-input-wrapper">

                  <input 
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />

                </div>
                </div>
                <div className="search-books-results">

                  <ol className="books-grid">
                    {
                      this.state.wantedBooks.map(wantedBook => {
                        let shelf = 'none';
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