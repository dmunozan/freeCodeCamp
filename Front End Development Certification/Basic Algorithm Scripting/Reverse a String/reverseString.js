function reverseString(str) {
  let revStr = "";
  
  // Loop through str adding the chars reversed
  for (let i = str.length-1; i > -1; i--) {
    revStr += str[i];
  }
  
  return revStr;
}
