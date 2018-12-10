/*
 * Intermediate Algorithm Scripting: Sorted Union
 * 
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * 
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * 
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * 
 *** Assertion Tests ***
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 */

function uniteUnique(arr) {
  // Variable to save the resulting array starting with arr
  var uniqueArray = arr.slice();

  // Loop through the arguments to check the other arrays
  for (var i = 1; i < arguments.length; i++) {
    // Loop through each extra array adding the elements if not already present
    for (var j = 0; j < arguments[i].length; j++) {
      if (uniqueArray.indexOf(arguments[i][j]) == -1) {
        uniqueArray.push(arguments[i][j]);
      }
    }
  }
  return uniqueArray;
}
