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
      }

      getWantedBooks = (query) => {
        BooksAPI.search(query).then((wantedBooks) => {
          this.setState({ wantedBooks: wantedBooks })
        })
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