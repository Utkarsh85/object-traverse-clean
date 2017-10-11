# object-traverse-clean

## Installation

```sh
npm i object-traverse-clean
```

## Usage

```javascript 

var otc= require('object-traverse-clean');

var obj={
	a:'22.3',
	b:22,
	c:'22',
	d:'Hello World',
	e:'true',
	f:true,
	g:'false',
	h:false,
	r: null,
	i:{
		a:'22.3',
		b:22,
		c:'22',
		d:'Hello World',
		e:'true',
		f:true,
		g:'false',
		h:false,
	},
	j:['22.2','b',{a:'22.2',b:22,c:'false'},['a','2','d.3']]
};

otc(obj);

//
// { 
// 	a: 22.3,
// 	b: 22,
// 	c: 22,
// 	d: 'Hello World',
// 	e: true,
// 	f: true,
// 	g: false,
// 	h: false,
// 	r: null,
// 	i:{ 
// 		a: 22.3,
// 		b: 22,
// 		c: 22,
// 		d: 'Hello World',
// 		e: true,
// 		f: true,
// 		g: false,
// 		h: false 
// 	},
// 	j: [ 22.2, 'b', { a: 22.2, b: 22, c: false }, [ 'a', 2, 'd.3' ] ] 
// }
//
```