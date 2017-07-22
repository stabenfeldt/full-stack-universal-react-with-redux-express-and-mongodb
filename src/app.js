"use strict"
import {createStore} from 'redux';

const reducer = function(state=0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
      break;
  }
  return state
}

console.log("hello");

// STEP 1 create the store
const store = createStore(reducer);
console.log("store: ", store);

store.subscribe(function(){
  console.log("in store.subscribe");
  console.log("current state is: ", + store.getState() );
})

// STEP 2 – create and dispatch actions
store.dispatch( {type: "INCREMENT", payload: 1} );
store.dispatch( {type: "INCREMENT", payload: 1} );
