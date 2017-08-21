import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import helloRedux from './redux/hello_redux';
import {HelloReact} from './react/hello';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function reduxComponent(){
	var element = document.createElement('div');
	element.setAttribute('id', 'redux');
	return element;
}

function reactComponent(){
	var element = document.createElement('div');
	element.setAttribute('id', 'root');
	return element;
}

document.body.appendChild(component());
document.body.appendChild(reduxComponent());
document.body.appendChild(reactComponent());
helloRedux();
HelloReact();