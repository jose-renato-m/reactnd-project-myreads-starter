import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './App.css';
  class BooksApp extends React.Component {
    render() {
      return (
        <Router>
          <div>            
            <Switch>
              <Route path="/">
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
