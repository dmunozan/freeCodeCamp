/*
 * Intermediate Algorithm Scripting: Missing letters
 * 
 * ind the missing letter in the passed letter range and return it.
 * 
 * If all letters are present in the range, return undefined.
 * 
 *** Conditions *** 
 * 
 * fearNotLetter("abce") should return "d".
 * fearNotLetter("abcdefghjklmno") should return "i".
 * fearNotLetter("stvwx") should return "u".
 * fearNotLetter("bcdf") should return "e".
 * fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */

function fearNotLetter(str) {
  // Array containing all the letters
  var ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
      "m", "n", "o", "p", 'q', "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Variable to save the result and return undefinded
  var missingLetter;
  // if not an empty string look for the missing letter
  if (str.length != 0) {
    // Check the index of the first letter
    var firstLetterIndex = ABC.indexOf(str.charAt(0));
    // Loop through str checking if it differs from ABC
    for (var i = 1; i < str.length; i++) {
      if (str.charAt(i) != ABC[firstLetterIndex + i]) {
        missingLetter = ABC[firstLetterIndex + i];
        break;
      }
    }
}
  return missingLetter;
}
