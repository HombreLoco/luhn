var assert = require("chai").assert;
var luhnCheck = require("../lib/index");

describe("Luhn Algorithm", function() {
  it("should return true if value passed to check is a number", function() {
    var num = 123;
    var result = luhnCheck.isNumber(num);
    console.log(result);
    assert.isTrue(result);
  });

  it("should do something", function() {
    var result = luhnCheck.check(4212115316655184);
    assert.isTrue(result);
  });
});