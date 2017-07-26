"use strict"
import {applyMiddleware, createStore} from 'redux'; //  eslint-disable-line
import   logger       from   'redux-logger';
import   React        from   'react';
import   {render}     from   'react-dom';
import   {Provider}   from   'react-redux';

// Combined reducers
import reducers from '../reducers'

// Actions
import {addToCart} from '../actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from '../actions/booksActions'

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist'


// STEP 2 – create and dispatch actions
// store.dispatch( postBooks(
// ));

// DELETE
// store.dispatch( deleteBooks(
//   { id: 1 }
// ));
//
// // UPDATE
// store.dispatch( updateBooks(
//   {
//     id: 2,
//     title: 'learn redux in 24h'
//   }
// ));
//
// // Cart actions
// // Add to cart
// store.dispatch( addToCart(
//   {
//     id: 2
//   }
// ));

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);
