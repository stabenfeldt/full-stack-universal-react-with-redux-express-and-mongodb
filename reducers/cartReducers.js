"use strict"

export function cartReducers(state={cart: []}, action) { // eslint-disable-line
  switch(action.type) {
  case 'ADD_TO_CART':
    return { cart: [...state.cart, ...action.payload] }
  }
  return state

}


