/*
 * Basic Algorithm Scripting: Repeat a String Repeat a String
 * 
 * Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 * 
 *** Conditions ***
 *
 * repeatStringNumTimes("*", 3) should return "***".
 * repeatStringNumTimes("abc", 3) should return "abcabcabc".
 * repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
 * repeatStringNumTimes("abc", 1) should return "abc".
 * repeatStringNumTimes("*", 8) should return "********".
 * repeatStringNumTimes("abc", -2) should return "".
 * The built-in repeat()-method should not be used
 */

function repeatStringNumTimes(str, num) {

  // Variable to save the result initialized to str
  let repeatedStr = str;

  /*
   * If num is not positive return empty string.
   * In any other case, concatenate num-1 times str.
   */
  if (num < 1) {
    return "";
  } else {
    for (let i = 1; i < num; i++) {
      repeatedStr += str;
    }
    return repeatedStr;
  }
}
