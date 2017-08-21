
import expect from 'expect.js';
import { deepFreeze } from '../lib/deep-freeze';

export function fnA(){
	console.log('fnA');
	expect(1).to.be(0+1);
}

export function fnB(){
	console.log('fnB');
	let a = { hello:'world'};
	console.log(deepFreeze);
	deepFreeze(a);
}