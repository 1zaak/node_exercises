var fs = require('fs')
var util = require('util')
var randomstring = require('randomstring')
var Random = require('random-js')()

var randomString = randomstring.generate()

var genAlphabeticString = function(){
  return randomstring.generate({
    // to generate limited length based on filesize
    charset: 'alphabetic'
  });
}

var genRealNumber = function(){
  return Random.real(-11020, 203023)
}

var genIntegers = function(){
  return Random.integer(1, 2133212323)
}

var genAlphanumeric = function(){
  return randomstring.generate({
    // to generate limited length based on filesize
    charset: 'alphanumeric'
  });
}

var randAlphabeticString = genAlphabeticString()
var randRealNumber = genRealNumber()
var randInteger = genIntegers()
var randAlphanumeric = genAlphanumeric()

// Get filesize in MB
var stats = fs.statSync('./reader/example.txt')
var fileSizeInMegaBytes = stats["size"] / 1000000.0

fs.writeFile('./output/output.txt', fileSizeInMegaBytes, function(err, content){
  if (err) throw console.error('Error writing output', err);
  console.log('It\'s saved Izaak!')
})
