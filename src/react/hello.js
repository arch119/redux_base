import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome, App } from './welcome';
import { Clock } from './clock';

function tick(){
	const element = (
		<div>
			<h1>Hello!</h1>
			<h2>Good to see you here</h2>
			<Clock />
			<App />
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