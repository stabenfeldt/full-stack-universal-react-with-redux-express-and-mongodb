"use strict"

import {combineReducers} from 'redux';

// Our reducsers that we want to combine
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
