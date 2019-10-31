import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './App.css';
  class BooksApp extends React.Component {
    render() {
      return (
        <div className="app">
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route path="/search" Component={Search} />
        </Switch>        
        </div>
      )
    }
  }

export default BooksApp
