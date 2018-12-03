/*
 * Intermediate Algorithm Scripting: Sum All Numbers in a Range
 * 
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
 * 
 * The lowest number will not always come first.
 * 
 *** Conditions ***
 * sumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45.
 */

function sumAll(arr) {

  var sum = 0;
  // Sort the array to have always the lowest number first
  var sortedArr = arr.sort(function(a,b) {
    return a - b;
  });

  // Loop from lowest to highest adding the numbers to sum
  for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sum += i;
  } 

  return sum;
}
