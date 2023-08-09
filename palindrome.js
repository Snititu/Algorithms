// Take the string from user
// First split it through the speace and join them again whithout space and lower all leters
// Compare the first letter and the last letter (decrease one by one) for the half of length of the string
// If they are not equal than return false
// There is no return false in the for loop than return true

function isPalindrome(str) {
  let newStr = str.split(" ").join("").toLowerCase();
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("mom"));
