//titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// create an empty string
//convert the string into an array
//create a loop that for the array
//char result = myStr.charAt(0);

let arr = "";
let x = "I'm a little tea pot";
let y = x.split(" ");

for (let i = 0; i < y.length; i++) {
  let word = y[i];
  let firstWord = word.charAt(0).toUpperCase();
  let restOfWord = word.slice(1).toLowerCase();
  arr += firstWord + restOfWord + " ";
}
console.log(arr);
