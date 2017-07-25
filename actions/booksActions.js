"use strict"

// POST a book
export function postBooks(book) {
  return  {
    type: "POST_BOOK",
    payload: book
  };
}

// DELETE a book
export function deleteBooks(id) {
  return  {
    type: "DELETE_BOOK",
    payload: id
  };
}

// UPDATE a book
export function updateBooks(book) {
  return  {
    type: "UPDATE_BOOK",
    payload: book
  };
}
