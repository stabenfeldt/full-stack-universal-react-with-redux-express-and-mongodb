"use strict"
import {createStore} from 'redux'; //  eslint-disable-line

// Combined reducers
import reducers from '../reducers'

// Actions
import {addToCart} from '../actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from '../actions/booksActions'

// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function(){
  console.log("current state is: ", store.getState() );
})

// STEP 2 – create and dispatch actions
store.dispatch( postBooks(
  [
    {
      id: 1,
      title: 'my book',
      description: 'hello from me',
      price: 99
    },
    {
      id: 2,
      title: 'my second book',
      description: 'bon jour a moi',
      price: 233
    }
  ]
));

// DELETE
store.dispatch( {
  type: "DELETE_BOOK",
  payload: { id: 1 }
})

// UPDATE
store.dispatch( {
  type: "UPDATE_BOOK",
  payload: {
    id: 1,
    title: 'Upated title'
  }
})

// Cart actions
// Add to cart
store.dispatch( addToCart( {id: 1} ))
