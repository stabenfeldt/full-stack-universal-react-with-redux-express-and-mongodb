"use strict"

// GET a book
export function getBooks() {
  return {
    type: "GET_BOOKS"
  }
}

// POST a book
export function postBooks(book) {
  return  {
    type: "POST_BOOK",
    payload: book
  };
}

// DELETE a book
export function deleteBooks(_id) {
  return  {
    type: "DELETE_BOOK",
    _id: _id
  };
}

// UPDATE a book
export function updateBooks(book) {
  return  {
    type: "UPDATE_BOOK",
    payload: book
  };
}
