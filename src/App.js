import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Search from './Search';

import * as BooksAPI from './BooksAPI';
import './App.css';

  class BooksApp extends React.Component {
    state = {
      books: []
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })      
    }

    changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);

      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    }

    render() {      
      return (
        <div className='app'>

          <Switch>
            <Route exact path='/' render={() => (
              <Home 
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
            )} />

            <Route path='/search' render={() => (
              <Search 
                changeShelf={this.changeShelf}
                books={this.state.books}
              />
            )} />
          </Switch>                 

          <Link to='/search'>
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </Link>

        </div>
      );
    }
  }

export default BooksApp
