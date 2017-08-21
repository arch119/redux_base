//import { createStore } from 'redux'
const { createStore, testStore } =  require('./my_redux');
const { testCounter } = require('./counter');
import {fnA, fnB } from './purees6';
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

export default function helloRedux(){
	testStore();
	testCounter();
	fnA();
	fnB();

	// Create a Redux store holding the state of your app.
	// Its API is { subscribe, dispatch, getState }.
	let store = createStore(counter)

	// You can use subscribe() to update the UI in response to state changes.
	// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
	// However it can also be handy to persist the current state in the localStorage.

	const render = ()=>{
	  document.getElementById('redux').textContent = store.getState()
	};

	store.subscribe(render);
	render();

	document.addEventListener('click', ()=>{
		store.dispatch({type: 'INCREMENT'})
	});
}
