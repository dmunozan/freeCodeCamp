/*
 * Intermediate Algorithm Scripting: Make a Person
 * 
 * Fill in the object constructor with the following methods below:
 * 
 * getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
 * 
 * Run the tests to see the expected output for each method.
 * 
 * The methods that take an argument must accept only one argument and it has to be a string.
 * 
 * These methods must be the only available means of interacting with the object.
 * 
 *** Assertion Tests ***
 * 
 * Object.keys(bob).length should return 6.
 * bob instanceof Person should return true.
 * bob.firstName should return undefined.
 * bob.lastName should return undefined.
 * bob.getFirstName() should return "Bob".
 * bob.getLastName() should return "Ross".
 * bob.getFullName() should return "Bob Ross".
 * bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
 * bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
 * bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
 * bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
 * bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
 */

var Person = function(firstAndLast) {

  this.getFirstName = function() {
    return firstAndLast.substring(0,firstAndLast.search(/ /));
  };
  
  this.getLastName = function() {
    return firstAndLast.substring(firstAndLast.search(/ /) + 1);
  };

  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFirstName = function(first) {
    firstAndLast = first.concat(firstAndLast.substring(firstAndLast.search(/ /)));
  };

  this.setLastName = function(last) {
    firstAndLast = firstAndLast.substring(0,firstAndLast.search(/ /) + 1).concat(last);
  };

  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
