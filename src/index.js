import React from 'react';
import ReactDOM from 'react-dom';
// react router dom has been installed through node package manager
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter ><App /></BrowserRouter>, 
    document.getElementById('root')
);