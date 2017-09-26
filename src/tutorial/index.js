
import React from 'react'
import { render } from 'react-dom'
import BasicExample from './basic/'
import AuthExample from './auth/components'
import {greeter} from './ts/lib'

function rootElement(){
	var element = document.createElement('div');
	element.setAttribute('id', 'root');
	return element;
}
document.body.appendChild(rootElement())

console.log(greeter('shambhu'))
render((
    <AuthExample />
  ), document.getElementById('root'))