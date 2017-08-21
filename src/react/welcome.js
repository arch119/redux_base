import React from 'react';
import {Comment} from './comment';

export function Welcome(props){
	return <h1>Hello, {props.name} </h1>;
}


export function App(){
	let author = {
		name: 'Shambhu',
		avatarUrl: 'http://placekitten.com/g/64/64',
	};

	return(
	<div>
		<Welcome name="Sara" />
		<Welcome name="Cahal" />
		<Welcome name="Edite" />
		<Comment author={author} text='Hello guys how are you?' date={new Date()} />
	</div>
	);
}