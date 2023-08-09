// Check if number less than 0; warn the user
// Number equals to 0; return 1
// Number greater than 0; create a variable equals to 1
// Create a for loop from the user number to 1, (decrease 1  by 1)
// Multiply first variable and loop variable
// Return the result


function factorialize(n){
  if(n < 0){
      return "You should enter positive number";
  } else if(n===0){
      return `${n}! : 1`;
  } else {
      let result = 1;
      for(let i = n; i>0;i--){
          result = result * i 
      }
      return `${n}! : ${result}`
  }
}
console.log(factorialize(5));


// This is shorter and better 

// function factorialize(n){
//     if(n < 0){
//         return "You should enter positive number";
//     } else if(n===0){
//         return 1;
//     } else {
//         return n * factorialize(n-1)   
//         }
//     }
//     console.log(factorialize(20));