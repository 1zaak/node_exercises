var fs = require('fs')
var _ = require('lodash')

var contentArr = []
var evaluatedArr = []

var isAlphaNumeric = function(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return str;
};

var isInteger = function(str) {
  var int = parseInt(str)
  isInt = isNaN(int)
  if (!isInt) {
    return str
  } else {
    return false
  }
}

var isRealNumber = function(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str)) {
    return str
  } else {
    return false
  }
}

var isAlphabeticString = function(str) {

}

var evaluator = function(str) {

}

console.log(isRealNumber('.9'), isInteger('.9'))

// fs.readFile('./output/output.txt', 'utf8', function(err, content) {
//   if (err) throw console.error('Error writing output', err);
//
//   contentArr.push(content)
//   // console.log('It\'s read!', contentArr)
//
//   evaluatedArr = _.map(content, evaluator)
//
//   // console.log('It\'s evaluated!', evaluatedArr)
// })

// 1. alphabetical
// 2. integer
// 3. realnumber
// 4. alphanumeric
