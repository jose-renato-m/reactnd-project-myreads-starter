import React from 'react';
import { Link } from 'react-router-dom';

function FooterNav (props) {
    return (
        <footer className='footer-nav'>
            <nav>
            <Link to='/search'>
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </Link>
            </nav>
        </footer>
    );
}

export default FooterNav;