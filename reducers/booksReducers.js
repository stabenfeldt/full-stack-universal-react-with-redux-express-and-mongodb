"use strict"

export function booksReducers(state={books:[]}, action) {
  switch (action.type) {
    case 'POST_BOOK':
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

    case 'UPDATE_BOOK':
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.books]

      // Determine at wich index the book we want to update is
      const indexToUpdate= currentBookToUpdate.findIndex(
        function(book) {
          return book.id === action.payload.id;
        }
      )

      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }

      console.log("newBookToUpdate: ", newBookToUpdate);



      return { books: [ ...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)]}
      break;

  }
  return state
}

