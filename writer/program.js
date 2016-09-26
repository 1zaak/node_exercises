var fs = require('fs')
var util = require('util')
var randomstring = require('randomstring')
var Random = require('random-js')()

var randomString = randomstring.generate()

var getRemainingFilesize = function(){
  // Return filesize in B
  var stats = fs.statSync('./reader/example.txt')
  return 1000001.0 - stats["size"] //uncomment for MB / 1000000.0
}

var getCurrentContents = function(){
  fs.readFile('./output/output.txt', 'utf8', function(err, content){
    if (err) throw console.log('Error reading current file', err)
    return content
  })
}

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
  // var spaceBefore = for (i=0; i<=)
  return randomstring.generate({
    // to generate limited length based on filesize
    charset: 'alphanumeric'
  });
}

var randAlphabeticString = genAlphabeticString()
var randRealNumber = genRealNumber()
var randInteger = genIntegers()
var randAlphanumeric = genAlphanumeric()

var fileSizeInMegaBytes = getRemainingFilesize()

fs.writeFile('./output/output.txt', fileSizeInMegaBytes, function(err, content){
  if (err) throw console.error('Error writing output', err);
  console.log('It\'s saved Izaak!')
})
