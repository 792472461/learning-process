const adapter = require('../../code/promise/Promise')

describe("Promises/A+ Tests", function () {
  require("promises-aplus-tests").mocha(adapter);
});