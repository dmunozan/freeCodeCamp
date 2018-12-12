/*
 * Intermediate Algorithm Scripting: Sum All Primes
 * 
 * Sum all the prime numbers up to and including the provided number.
 * 
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * The provided number may not be a prime.
 * 
 *** Assertion Tests ***
 * sumPrimes(10) should return a number.
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156.
 */

function sumPrimes(num) {
  // Variable to save the addition of the prime numbers
  var addedPrimes = 0;
  
  // Function to check if the number is prime
  function checkPrime(numCheck) {
    // If the number is smaller than two return false
    if (numCheck < 2) {
      return false;
    }
    // Loop from numCheck - 1 until 2 checking if it's a divisor
    var isPrime = true;
    for (var i = numCheck - 1; isPrime && (i > 1); i--) {
      isPrime = (numCheck % i != 0);
    }
    return isPrime;
  }

  // Loop from num until 2 adding the primes
  for (var j = num; j > 1; j--) {
    if (checkPrime(j)) {
      addedPrimes += j;
    }
  }

  return addedPrimes;
}
