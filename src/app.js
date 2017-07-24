"use strict"
import {createStore} from 'redux';

// STEP 3
const reducer = function(state={books:[]}, action) {
  switch (action.type) {
    case 'POST_BOOK':
      // let books = state.concat(action.payload)
      // return state = action.payload
      return { books: [...state.books, ...action.payload] }
      break;
    case 'DELETE_BOOK':
      // Create a copy of the current array of books
      const currentBookToDelete = [...state.books]

      // Determine at wich index the book we want to delete is
      const indexToDelete = currentBookToDelete.findIndex(
        function(book) {
          return book.id === action.payload.id;
        }
      )


      return { books: [ ...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
      break;
  }
  return state
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log("current state is: ", store.getState() );
  //console.log("price: ", store.getState()[1].price );
})

// STEP 2 – create and dispatch actions
store.dispatch( {
  type: "POST_BOOK",

  payload: [
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

});

store.dispatch( {
  type: "DELETE_BOOK",
  payload: { id: 1 }
})
