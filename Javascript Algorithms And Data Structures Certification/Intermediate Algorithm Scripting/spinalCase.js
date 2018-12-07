/*
 * Intermediate Algorithm Scripting: Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
 * 
 *** Conditions ***
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 * spinalCase("AllThe-small Things") should return "all-the-small-things".
 */

function spinalCase(str) {
  // Convert str to array after changing the non-letters to dashes
  var strArr = str.replace(/\W+|_+/g,"-").split("");

  // If first character is a symbol remove it
  if (strArr[0].match(/\W/)) {
    strArr.splice(0,1);
  }
  // If first character is an uppercase letter change it to lowercase
  if (strArr[0].match(/[A-Z]/)) {
    strArr[0] = strArr[0].toLowerCase();
  }

  // Loop through the array converting it to spinal case
  for (var i = 1; i < strArr.length; i++) {
    /* 
     * If uppercase letter change it to lowercase and add a dash if
     * previous character is a letter.
     */
    if (strArr[i].match(/[A-Z]/)) {
      strArr[i] = strArr[i].toLowerCase();
      if (strArr[i-1].match(/\w/)) {
        strArr.splice(i,0,"-");
      }
    } 
  }
  return strArr.join("");
}
