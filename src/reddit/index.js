import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'

function rootElement(){
	var element = document.createElement('div');
	element.setAttribute('id', 'root');
	return element;
}

document.body.appendChild(rootElement())

render(
    <Root />,
    document.getElementById('root')
)