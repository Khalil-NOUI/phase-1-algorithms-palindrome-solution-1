function isPalindrome(word) {

      // split the original string into an array of letters
  const lettersArray = word.split('');
    
      // create a reverse array
  const reverseArray = lettersArray.reverse()
  
      // convert the string-array into a string
  const reverseWord = reverseArray.join('');
  
      // check if the original string matches the new string
  return word === reverseWord;
}

/* 
  1- reverse the input string
  
  2- check ( reverse string VS input string )

  3- return test-result boolean value

*/

/*

  i need to write a function that takes a string as input then reverse it's letter ordering,the function check if the generated string is the same as the string input.
  if yes the function return a positive boolean and vice versa. 

  using reverse() method is much better than employing a whole function
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: false"); // to test for case sensitvity
  console.log("=>", isPalindrome("Wow"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("MOM"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("444"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("4554"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
