function factorialize(num) {
  // Test if it's a positive number
  if (isNaN(num) || num < 0) {
    console.log("The argument can only be a positive number");
    return NaN;
  }
  // Variable to save the result
  var total = 1;
  // Loop to multiply the numbers from 1 to num
  for (var i = 1; i < num + 1; i++) {
    total *= i;
  }
  return total;
}
