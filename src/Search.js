import React, {Component} from 'react';
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
                  <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                      this.state.wantedBooks.map(wantedBook =>(
                        <li key={wantedBook.id}>
                          <Book
                            book={wantedBook}
                          />
                        </li>
                      ))
                    }

                  </ol>

                </div>
                </div>
            )
        }
    }

export default Search;