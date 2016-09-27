var fs = require('fs')
var randomstring = require('randomstring')
var Random = require('random-js')()
var bytes = require('bytes');

var OUTPUT_SIZE = 1024 // 10485760 (10MB), 1048576 (1MB), 1024 (1KB)

var genAlphabeticString = function(limit) {
  return randomstring.generate({
    // to generate limited length based on remaining filesize
    length: limit,
    charset: 'alphabetic'
  });
}

var genRealNumber = function(limit) {
  // limit is the length of the number, not the value
  var realNumber = Random.real(-limit, limit)
  var fixedDecimal = Random.integer(0, 18)
  return realNumber.toFixed(fixedDecimal)
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

  // limit length
  alphanumeric = randSpace + alphanumeric + randSpace
  return alphanumeric.slice(0, limit)
}

var genMainFile = function(genAlphabeticString, genRealNumber, genInteger, genAlphanumeric) {



  var randomizers = [genAlphabeticString, genRealNumber, genInteger, genAlphanumeric]
  var finalOutput = []
  var iterator = 0
  console.log('Generating output file, please be patient..')

  while (finalOutput.toString().length < OUTPUT_SIZE) {
    var limit = Random.integer(0, 100) // limit of each items (can be set to remaining filesize)
    var actualLength = finalOutput.toString().length
    var diff = OUTPUT_SIZE - actualLength - 1
    if (diff == 0) {
      return
    }

    limit = (limit > diff) ? diff : limit

    var randomize = Random.integer(0, 3)
    var item = randomizers[randomize](limit)

    while (item.toString().length > limit) {
      var randomize = Random.integer(0, 3)
      var item = randomizers[randomize](limit)
    }
    finalOutput.push(item)
  }


  console.log('Final output size is:', bytes(finalOutput.toString().length))
  fs.writeFile('./output/output.txt', finalOutput, function(err, content) {
    if (err) throw console.error('Error writing output', err);
    console.log('It\'s saved!')
  })
}

genMainFile(genAlphabeticString, genRealNumber, genInteger, genAlphanumeric)
