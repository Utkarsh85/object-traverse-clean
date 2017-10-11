var expect = require('chai').expect

var lib= require('../lib/lib');

describe('object traverse clean tests',function () {
	

	it('Should change string numbers to numbers',function (done) {
		var obj={a:'2'};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a');
		expect(newObj.a === 2).to.equal(true);
		done();
	})

	it('Should change string booleans to booleans',function (done) {
		var obj={a:'true'};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a');
		expect(newObj.a === true).to.equal(true);
		done();
	})

	it('Should let strings be strings',function (done) {
		var obj={a:'hello'};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a');
		expect(newObj.a === 'hello').to.equal(true);
		done();
	})

	it('Should work for arrays too',function (done) {
		var obj={a:['hello','true','1']};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a').to.have.length(3);
		expect(newObj.a[0] === 'hello').to.equal(true);
		expect(newObj.a[1] === true).to.equal(true);
		expect(newObj.a[2] === 1).to.equal(true);
		done();
	})

	it('Should work for nested objects too',function (done) {
		var obj={a:{b:'true',c:'1'}};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a').to.have.property('b');
		expect(newObj).to.have.property('a').to.have.property('c');
		expect(newObj.a.b === true).to.equal(true);
		expect(newObj.a.c === 1).to.equal(true);
		done();
	})

	it('Should return null and undefined as it is',function (done) {
		var obj={a:null,b: undefined};
		var newObj=lib.main(obj);

		expect(newObj).to.have.property('a');
		expect(newObj).to.have.property('b');
		expect(newObj.a === null).to.equal(true);
		expect(typeof newObj.b === "undefined").to.equal(true);
		done();
	})
})