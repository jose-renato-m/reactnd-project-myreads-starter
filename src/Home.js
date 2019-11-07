import React, {Component} from 'react';
import Book from './Book';
import FAB from './components/FAB';

  class Home extends Component {     
    render() {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          
          <FAB />               
        </div>
      );
    } 
  }

export default Home;