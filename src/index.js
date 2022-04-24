import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import {createStore} from 'redux'
// STORE -> 

// Action ->
const increment =() => {
  return {
    type: "INCREMENT"
  }
}

const decrement =() => {
  return {
    type: "DECREMENT"
  }
}

// Reducer -> 
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT": 
      return state +1;
      break;
    case "DECREMENT":
      return state -1;  
  }
}

// Store ->
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

// username
// this.username =  localStorage.getItem("username")
// console.log(this.username)

// Dispatch ->
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
