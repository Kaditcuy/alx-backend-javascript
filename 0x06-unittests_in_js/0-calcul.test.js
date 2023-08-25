var calculateNumber = require('./0-calcu1')
var assert = require('assert')

describe('calculateNumber', function () {
	it('should return 4 when adding 1 and 3', function () {
		assert.equal(calculateNumber(1,3), 4);
	});
	it('should return 5 when adding 1 and 3.7', function () {
		assert.equal(calculateNumber(1,3.7), 5);
	});
	it('should return 5 when adding 1.2 amd 3.7', funxtion () {
		assert.equal(calaculateNumber(1.2, 3.7), 5);
	});
	it('should return 6 when adding 1.5 and 3.7', function () {
    		assert.equal(calculateNumber(1.5, 3.7), 6);
  	});
	it('should return 0 when adding 0.1 and 0.3', function () {
    assert.equal(calculateNumber(0.1, 0.3), 0);
  });
  it('should return -4 when adding -1.1 and -2.7', function () {
    assert.equal(calculateNumber(-1.1, -2.7), -4);
  });
});
