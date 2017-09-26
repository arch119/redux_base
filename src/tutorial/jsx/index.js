import React from 'react'
import { render } from 'react-dom'
import Clock from './components/clock'

function rootElement(){
	var element = document.createElement('div');
	element.setAttribute('id', 'root');
	return element;
}
document.body.appendChild(rootElement())
let x = 5
const incX = ()=>{
	x=x+1
	console.log(x)
	main()
}
function Title({x}){
	return (
		<div>
		<h1> Hello World </h1>
		<MyButton />
		<input type="text" value={x} readOnly />
		</div>
	)
}

function MyButton(){
	return (
		<button onClick={incX}> Click Me! </button>
	)
}
function main(){
render((
	<Clock />
  ), document.getElementById('root'))
}

main()