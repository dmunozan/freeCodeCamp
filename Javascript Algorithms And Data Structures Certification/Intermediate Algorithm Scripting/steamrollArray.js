/*
 * Intermediate Algorithm Scripting: Steamroller
 * 
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 *** Assertion Tests ***
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */

function steamrollArray(arr) {
  // Variable to save the final array
  var concatenatedArray = [];

  // Loop through the different elements of arr calling steamrollArray recursively if they are not empty arrays or adding it to concatenatedArray if it's not an array
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (arr[i].length > 0) {
        concatenatedArray = concatenatedArray.concat(steamrollArray(arr[i]));
      }
    } else {
      concatenatedArray.push(arr[i]);
    }
  }

  return concatenatedArray;
}
