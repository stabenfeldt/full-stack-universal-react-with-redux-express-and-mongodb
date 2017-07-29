"use strict"

export function booksReducers(
  state={books:[
    {
      _id: 1,
      title: 'my book',
      description: 'hello from me',
      price: 99
    },
    {
      _id: 2,
      title: 'my second book',
      description: 'bon jour a moi',
      price: 233
    }
  ]
  }, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {...state, books:[...state.books]}
    case 'POST_BOOK':
      return { books: [...state.books, ...action.payload] }
      break;

    case 'DELETE_BOOK':
      const currentBookToDelete = [...state.books]
      const indexToDelete = currentBookToDelete.findIndex(
        function(book) {
          return book._id.toString() == action._id;
        }
      )
      return { books: [ ...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
      break;

    case 'UPDATE_BOOK':
      const currentBookToUpdate = [...state.books]
      const indexToUpdate= currentBookToUpdate.findIndex(
        function(book) {
          return book._id === action.payload._id;
        }
      )
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      return { books: [ ...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)]}
      break;

  }
  return state
}

