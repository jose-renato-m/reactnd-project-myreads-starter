import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';
  class BooksApp extends React.Component {
    render() {
      return (
        <Router>
          <div className="app">            
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </div>
        </Router>        
      );
    }
  }

export default BooksApp
