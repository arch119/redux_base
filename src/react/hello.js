import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome, App } from './welcome';
import { Clock } from './clock';
import { Toggle } from './toggle';


function List(props){
	const numbers = [1,2,3,4,5];
	const listItems = numbers.map((number)=><li key={number.toString()}>{number}</li>);
	return (
		<div>
			<ul> {listItems} </ul>
		</div>
	);
};


function tick(){
	const element = (
		<div>
			{/*
			<h1>Hello!</h1>
			<h2>Good to see you here</h2>
			<Clock />
			<App />
			<Toggle initialState='off'/>
			*/}
			<List />
		</div>
		);

	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}

export function HelloReact(){
	console.log(Welcome);
	setInterval(tick, 1000);
};