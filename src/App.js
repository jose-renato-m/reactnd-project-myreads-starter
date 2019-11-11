import React from 'react';
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
        <div className="app">            
          {/* <Home 
            books={this.state.books}
            changeShelf={this.changeShelf}
          /> */}
          <Search 
            changeShelf={this.changeShelf}
          />
        </div>                
      );
    }
  }

export default BooksApp
