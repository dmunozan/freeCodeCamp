/*
 * Basic Algorithm Scripting: Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * 
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 * 
 *** Conditions ***
 * 
 * titleCase("I'm a little tea pot") should return a string.
 * titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
 * titleCase("sHoRt AnD sToUt") should return Short And Stout.
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
 */

function titleCase(str) {
  /* 
   * Auxiliar variable to save the resulting string with the first
   * character capitalized.
   */ 
  let auxStr = str.charAt(0).toUpperCase();

  for (let i = 1; i < str.length; i++) {
    /*
     * Add lowercase characters unless there is a space.
     * If space, add the space plus next character capitalized
     * incrementing the index.
     */
    if (str.charAt(i) !== " ") {
      auxStr += str.charAt(i).toLowerCase();
    } else {
      auxStr += " " + str.charAt(++i).toUpperCase();
    }
  }
  return auxStr;
}
