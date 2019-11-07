import React, {Component} from 'react';
import Book from './Book';
import Shelf from './components/Shelf';
import FAB from './components/FAB';

  class Home extends Component {     
    render() {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf title="Currently Reading" />
            <Shelf title="Want to Read" />
            <Shelf title="Read" />
          </div>
          <FAB />               
        </div>
      );
    } 
  }

export default Home;