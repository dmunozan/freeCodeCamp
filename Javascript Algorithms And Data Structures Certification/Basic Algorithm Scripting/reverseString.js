/*
 * Basic Algorithm Scripting: Reverse a String
 * Reverse the provided string.
 *
 * You may need to turn the string into an array before you can reverse it.
 *
 * Your result must be a string.
 *
 ******** Examples ***
 *
 * reverseString("hello") should return a string.
 * reverseString("hello") should become "olleh".
 * reverseString("Howdy") should become "ydwoH".
 * reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
 */
 
function reverseString(str) {
  let revStr = "";
  
  // Loop through str adding the chars reversed
  for (let i = str.length-1; i > -1; i--) {
    revStr += str[i];
  }
  
  return revStr;
}
