function reverseString(str) {
  var auxArray = []; // Auxiliar array to work with the string
  
  // Loop to push the characters of the string in the array
  for (var i = 0; i < str.length; i++){
    auxArray.push(str.charAt(i));
  }
  
  // Reverse the array and join without nothing to create the reversed string
  auxArray.reverse();
  return auxArray.join("");
}
