function isNumber(num) {
  return Number.isInteger(num);
}

var check = function(num) {
  if (!isNumber(num)) { return false; }

  var numString = num.toString();
  var checkDigit = numString.slice(numString.length - 1, numString.length);
  var numNoCheckDigit = numString.slice(0, -1);
  var len = numNoCheckDigit.length;
  var counter = 1;
  var numSum = 0;

  for (var i = (len - 1); i >= 0; i--) {
    if (counter % 2 === 0) {
      numSum += (numNoCheckDigit[i] * 1);
    } else {
      var doubled = numNoCheckDigit[i] * 2;
        if (doubled > 9) {
          numSum += doubled - 9;
        } else {
          numSum += doubled;
        }
    }
    counter++;
  }
  if (((numSum + (checkDigit * 1)) % 10) === 0) {
    return true;
  }
  return false;
}

module.exports = {
  isNumber: isNumber,
  check: check
}