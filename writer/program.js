var fs = require('fs')
var randomstring = require('randomstring')
var Random = require('random-js')()

var genAlphabeticString = function(limit) {
  return randomstring.generate({
    // to generate limited length based on remaining filesize
    length: limit,
    charset: 'alphabetic'
  });
}

var genRealNumber = function(limit) {
  return Random.real(-limit, limit)
}

var genInteger = function(limit) {
  return Random.integer(1, limit)
}

var genAlphanumeric = function(limit) {
  // For generating random amount of spaces before and after
  String.prototype.repeat = function() {
    return Array(10 + 1).join(this);
  };
  var randSpace = " ".repeat()
  var alphanumeric = randomstring.generate({
    // to generate limited length based on remaining filesize
    length: limit,
    charset: 'alphanumeric'
  });
  return randSpace + alphanumeric + randSpace
}

var genMainFile = function(genAlphabeticString, genRealNumber, genInteger, genAlphanumeric) {
  var limit = 100 // 1000000 = 10 MB
  var randomizers = [genAlphabeticString, genRealNumber, genInteger, genAlphanumeric]
  var finalOutput = []
  console.log('generating main file..')

    for (i = limit; i >= 0; i--) {
      var randomize = Random.integer(0, 3)
      var item = randomizers[randomize](limit)
      console.log('randomizing item..', i, item)
      finalOutput.push(item)
    }

    console.log('finalOutput length:',finalOutput.toString().length)
    fs.writeFile('./output/output.txt', finalOutput, function(err, content) {
      if (err) throw console.error('Error writing output', err);
      console.log('It\'s saved!')
    })
}

genMainFile(genAlphabeticString, genRealNumber, genInteger, genAlphanumeric)
