"use strict"
import {applyMiddleware, createStore} from 'redux'; //  eslint-disable-line
import   logger       from   'redux-logger';
import   React        from   'react';
import   {render}     from   'react-dom';
import   {Provider}   from   'react-redux';

// Combined reducers
import reducers from './reducers'

// Actions
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist'



render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);
