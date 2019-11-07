import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';
  class BooksApp extends React.Component {
    render() {
      return (
        <div className="app">            
          <Home />
        </div>                
      );
    }
  }

export default BooksApp
