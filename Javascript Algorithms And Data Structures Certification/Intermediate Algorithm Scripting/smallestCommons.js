/*
 * Intermediate Algorithm Scripting: Smallest Common Multiple
 * 
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all 
 * sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all 
 * numbers between 1 and 3. The answer here would be 6.
 * 
 *** Assertion Tests ***
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([2, 10]) should return 2520.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 */

function smallestCommons(arr) {

  /*
   * Returns the prime factorization of num
   * returns an object with key:value pairs where
   *  key = prime number of num
   *  value = exponent value of key
   * or an empty object if num is not greater than 1
   *  Example:
   *   Prime factorization of 12 = 2 * 2 * 3
   *   primeFactorization(12) returns
   *     Obj {
   *       2: 2,
   *       3: 1
   *     }
   *   primeFactorization(1) returns
   *     Obj {}
   */ 
  function primeFactorization(num) {
    var numFactorized = {}; // Object to save the result
    var max = num; // variable to keep track of the max number index may have
    var index = 2; // variable to check if it's a divisor of max

    // Loop from index to max looking for the prime numbers of num and saving the exponent in numFactorized
    while (index <= max) {
      // If prime number save it to numFactorized
      if (max % index == 0) {
        // If exists increment exponent, else add it to numFactorized
        if (numFactorized.hasOwnProperty(index)) {
          numFactorized[index]++;
        } else {
          numFactorized[index] = 1;
        }
        // Update max to the new max value (max/index)
        max /= index;
      } else {
        index++;
      }
    }

    return numFactorized;
  }

  /*
   * Returns the smallest common multiple of two numbers
   * Returns a number greater than 0 or 0 if either of the passed
   * arguments is 0
   *  Example:
   *   smallestCommonMultiple(4, 12) returns 20
   *   smallestCommonMultiple(0, 3) retuns 0
   */
  function smallestCommonMultiple(numA, numB) {
    // Check if 0
    if (numA == 0 || numB == 0) {
      return 0;
    }

    var scm = 1; // Variable to save the result

    // Get the prime factorization of the absolute numbers
    var numFactorizedA = primeFactorization(Math.abs(numA));
    var numFactorizedB = primeFactorization(Math.abs(numB));

    // Loop through numFactorizedA
    for (var item in numFactorizedA) {
      // Check if the primer number exist or not on numFactorizedB
      if (numFactorizedB.hasOwnProperty(item)) {
        /*
         * Multiply scm with item raised to the n-th power 
         * where n is the max value of numFactorizedA[item] and
         * numFactorizedB[item])
         */
        scm *= Math.pow(parseInt(item), Math.max(numFactorizedA[item], numFactorizedB[item]));
        // delete the element from numFactorizedB
        delete numFactorizedB[item];
      } else {
        // Multiply scm with item raised to the numFactorizedA[item] power
        scm *= Math.pow(parseInt(item), numFactorizedA[item]);
      }
    }

    // Loop through the remaining items of numFactorizedB
    for (var item in numFactorizedB) {
      scm *= Math.pow(parseInt(item), numFactorizedB[item]);
    }

    return scm;
  }

  arr.sort(function(a, b) {
    return a - b;
  })

  var finalResult = arr[0];

  // Loop from the smallest number to the biggest calling smallestCommonMultiple
  for (var i = arr[0] + 1; i <= arr[1]; i++) {
    finalResult = smallestCommonMultiple(finalResult, i);
  }

  return finalResult;
}
