
const expect = require('expect.js');
const deepFreeze = require('../lib/deep-freeze');

function createStore(reducer){
	let state;
	let listeners = [];

	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener())
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener );
		}
	};

	dispatch({});

	return {getState, dispatch, subscribe };
};


function testStore(){
	console.log('Running testStore');
	const reducer = (state=0, action)=>{
		switch (action.type){
			case 'ADD':
				return state+1
			case 'SUB':
				return state-1
			default:
				return state
		}
	}

	let store = createStore(reducer);
	expect(store.getState()).to.be(0);
}

module.exports = {
	createStore: createStore,
	testStore: testStore
};