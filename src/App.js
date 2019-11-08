import React from 'react';
import Home from './Home';
import Search from './Search';
import './App.css';

  class BooksApp extends React.Component {
    state = {
      books: []
    }
     
    render() {
      return (
        <div className="app">            
          <Home />
        </div>                
      );
    }
  }

export default BooksApp
