/*
 * Basic Algorithm Scripting: Finders Keepers
 * 
 * Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
 * 
 *** Conditions ***
 * 
 * findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
 * findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
 */

function findElement(arr, func) {
  // Loop through arr checking with func and return the first element that returns true.
  for (let i = 0; i < arr.length; i++) {
   if (func(arr[i])) {
     return arr[i];
   }
  }
  return undefined;
}
