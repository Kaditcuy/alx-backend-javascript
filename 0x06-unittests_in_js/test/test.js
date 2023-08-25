var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return 0 when the value is present', function () {
      assert.equal([1, 2, 3, 4].indexOf(5), -1);
    });
  });
});
