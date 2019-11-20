import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Search from './Search';

import * as BooksAPI from './BooksAPI';
import './App.css';

const booksWithoutThisBook = books.filter(item =>
  item.id !== book.id);
book.shelf = shelf;
const booksWithUpdatedBook = [...booksWithoutThisBook, book];

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
      BooksAPI.update(book, shelf).then(() => 
      this.setState({ books: [...newBook, book] }));
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

        </div>
      );
    }
  }

export default BooksApp
