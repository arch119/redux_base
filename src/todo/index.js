import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'


function rootElement(){
	var element = document.createElement('div');
	element.setAttribute('id', 'root');
	return element;
}

let store=createStore(todoApp)
store.subscribe(()=>{
    console.log(store.getState())
})
document.body.appendChild(rootElement());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
