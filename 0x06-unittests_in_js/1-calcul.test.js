var assert = require('assert');
var calculateNumber = require('./1-calcul.js')

describe('calculateNumber', function () {
  it('should return 6 when adding 1.4 and 4.5', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return -4 when subtracting 1.4 and 4.5', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return 0.2 when dividing 1.4 and 4.5', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return Error when dividing by 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
