const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise on success', () => {
    getPaymentTokenFromAPI(true).then((response) => {
      assert.strictEqual(response.data, 'Successful response from the API');
      done();
    });
  });
});
