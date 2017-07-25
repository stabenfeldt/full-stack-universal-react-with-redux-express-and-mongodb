"use strict"

import {combineReducers} from 'redux';

// Our reducsers that we want to combine
import {booksReducers} from './booksReducers';

export default combineReducers({
  books: booksReducers
})
