
var expect = require('expect.js');
const { deepFreeze } = require('../lib/deep-freeze');

const addCounter = (list) => {
	return [...list, 0];
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];

	deepFreeze(listBefore);
	expect(addCounter(listBefore)).to.eql(listAfter);
};

const testES6Derestructuring = ()=>{
	const l = console.log;
	const fn = (a, b, kwargs) => {
		const {c, d } = kwargs;
		l(a,b,c,d);
	};
	fn(2,3, {c:4, d:5});
};

const testES6Spread = ()=>{
	const l = console.log;
	const varargfn = (a,b,c) => {
		l( ',', a,b,c, ';')
	};
	let a = [1,2,3];
	varargfn(a);
	varargfn(...a);
	l(...a,4,...a);
};

const runTests = ()=>{
	console.log('Running testCounter');
	testES6Spread();
	testES6Derestructuring();
	testAddCounter();
};


module.exports.testCounter = runTests;