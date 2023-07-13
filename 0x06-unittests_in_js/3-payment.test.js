const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

// using spy() to wrap Utils.calculateNumber() and restoring it after

describe('sendPaymentRequestToApi', function () {
  it('should return 120', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const res = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(res).to.equal(120);
    spy.restore();
  });
});
