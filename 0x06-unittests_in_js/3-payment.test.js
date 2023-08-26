var Utils = require ('./utils');
var sinon = require('sinon');
var expect = require('chai').expect;
var sendPaymentRequestToApi = require('./3-payment');


// Using sinon.spy to validate the usage of the utils function, i.e Utils.calculateNumber()

describe('sendPaymentRequestToApi', function() {
	it('should return 120', function () {
		const spy = sinon.spy(Utils, 'calculateNumber');
		const res = sendPaymentRequestToApi(100, 20);
		expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
		expect(res).to.equal(120);
		spy.restore();
	});
});
