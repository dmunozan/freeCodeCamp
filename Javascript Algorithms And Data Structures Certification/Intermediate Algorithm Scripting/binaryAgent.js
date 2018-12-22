/*
 * Intermediate Algorithm Scripting: Binary Agents
 * 
 * Return an English translated sentence of the passed binary string.
 * 
 * The binary string will be space separated.
 * 
 *** Assertion Tests ***
 * binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
 * binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
 */

function binaryAgent(str) {
  // Split str and save it in phrase array
  var phrase = str.split(" ");
  
  // Map phrase as numbers in words
  var words = phrase.map(function(word) {
    return parseInt(word, 2);
  })

  // return the numbers converted to their ascii characters
  return String.fromCharCode(...words);
}
