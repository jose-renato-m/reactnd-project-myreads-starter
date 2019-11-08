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

    render() {
      console.log(this.state.books);
      return (
        <div className="app">            
          <Home 
            books={this.state.books}
          />
        </div>                
      );
    }
  }

export default BooksApp
