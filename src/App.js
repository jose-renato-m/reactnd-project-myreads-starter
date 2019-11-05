import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './App.css';
  class BooksApp extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Search">Search</Link>
                </li>
              </ul>
            </nav>
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
