const getPaymentTokenFromAPI = require("./6-payment_token");
const assert = require("assert");

describe("getPaymentTokenFromAPI", function () {
  it("promise resolves with the correct token string", function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.strictEqual(response.data, "Successful response from the API");
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
