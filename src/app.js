"use strict"
import {applyMiddleware, createStore} from 'redux'; //  eslint-disable-line
import   logger       from   'redux-logger';
import   React        from   'react';
import   {render}     from   'react-dom';
import   {Provider}   from   'react-redux';

// Components
import Menu from './components/menu';
import BooksList from './components/pages/bookslist'

// Combined reducers
import reducers from './reducers'

// Actions
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);




render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
    </div>
  </Provider>, document.getElementById('app')
);
