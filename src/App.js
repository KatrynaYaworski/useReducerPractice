import React, { useReducer } from 'react';
import './App.css';

const INCREMENT1 = "INCEMENT1"

function App() {
const initialState = {
  count1: 0,
  count2: 0,
  name: "jane doe"
}
const reducer = (state = {}, action) => {
  console.log({state})
  switch (action.type) {
    case INCREMENT1:
      return {...state, count1: state.count1 + 1}
    case "DECREMENT1":
      return {...state, count1: state.count1 - 1}
    case "INCREMENT2":
      return {...state, count2: state.count2 + 1}
    case "DECREMENT2":
      return {...state, count2: state.count2 - 1}
    case "CHANGE_NAME":
      return {...state, name: action.payload}
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <h1>my name: {state.name}</h1>
        <input onChange={(e) => dispatch({ type: "CHANGE_NAME", payload: e.target.value})}></input>
        <h1>useReducer count 1: {state.count1}</h1>
        <button onClick={() => dispatch({type: INCREMENT1})}>increase</button>
        <button onClick={() => dispatch({type: "DECREMENT1"})}>decrease</button>
        <h1>useReducer count 2: {state.count2}</h1>
        <button onClick={() => dispatch({type: "INCREMENT2"})}>increase</button>
        <button onClick={() => dispatch({type: "DECREMENT2"})}>decrease</button>
      </header>
    </div>
  );
}

export default App;
