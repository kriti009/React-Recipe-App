import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './RecipeApp';
import Navbar from './navbar.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<RecipeApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
