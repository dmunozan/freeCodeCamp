/*
 * Intermediate Algorithm Scripting: Arguments Optional
 * 
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * 
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 * 
 *** Assertion Tests *** 
 * 
 * addTogether(2, 3) should return 5.
 * addTogether(2)(3) should return 5.
 * addTogether("http://bit.ly/IqT6zt") should return undefined.
 * addTogether(2, "3") should return undefined.
 * addTogether(2)([3]) should return undefined.
 */

function addTogether() {
  // Variable to save the result (undefined by default)
  var result;

  // Check if we have one or more arguments
  if (arguments.length == 1) {
    /*
     * Check if the first argument is an integer and return a function to
     * add this integer to a second one received by that function.
     */
    if (Number.isInteger(arguments[0])) {
      var a = arguments[0];
      result =  function(b) {
        if (Number.isInteger(arguments[0])) {
          return a + b;
        } else {
          return undefined;
        }
      };
    }
  } else {
    // Check if the first two arguments are integers and return the addition
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      result = arguments[0] + arguments[1];  
    }
  }

  return result;
}
