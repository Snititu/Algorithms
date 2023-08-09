/*exercise 1
created an empty var of sum
created a loop
we checked if the numbers are divisible by 3 or 5 not both
summed it in the empty variable


const sum=0
for (let i=200; i<=2700; i++)
if ((i/3==0 || i/5==0)&&!(i/5==0 && i/3==0)){
  sum= sum + i
}

console.log(sum)*/

//exercise 2
//we define the array
//reverse the array

// let x = [2,1,6,4,-7]
// let y= x.reverse()
// console.log(y)

//exercise 3

//we define an empty array
// make a loop to count 1-135
//if condition to change multiples of both into fizzbuzz
//if condition to check the divisibility by three and to replace by fizz
// make a an if condition to change multiples of 5 into buzz
// to print the other numbers as they are

/*let array = [];

for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    array.push("FizzBuzz");
  } else if (i % 3 === 0) {
    array.push("Fizz");
  } else if (i % 5 === 0) {
    array.push("Buzz");
  } else {
    array.push(i);
  }
}

console.log(array);*/

//exercise 4
// Create an empty array
// Create 3 variables, one of them is 1(also for while loop), one is 1 and the other one is undefined
// Create while loop that lasts until 1000000
// Push the first variable to the array
// Add your varible and put third variable
// Set the first variable to second one
// Set your second variable to the variable which equals to total
// Log the final array to the console

/*const nums = [0,1,2,3,4];
let x = 1, y=1, xy;
while(x<1000000){
    nums.push(x);
    xy = x+y ;
    x=y;
    y=xy;
}
console.log(nums);*/

// const r=['Man', 'I','Love','The','Matrix','Program'];
//    let text =[];
// for(s=0; s<=r.length-1; s++){
//     if(r[s]=='Program'){
//         t='*'.repeat(r[s].length);
//         text.push(t);
//     }else{
//         text.push(r[s]);
//     }
   
// }
// console.log(text)

//exercise 5
//define an empty array
//make a loop for the array
//filter numbers below zero


// let arr=[]
// let x= [1,-2,4,1]
// for ( let i=0 ; i<x.length; i++){
//   arr = x.filter(i => i >= 0);
// }

// console.log(arr)

//exercise 6

// let x = "1,2,3,MM,a,t,r,i,x,_,,_M,a,s,t,e,r,5,2,0,7"
// let y= x.split("")
// let f=y.filter( e=> ((e>="a" && e<="z" )||(e>="A" && e<="Z") || (e=="_"))  )
// let s = f.slice(1, f.length)
// let r = s.reduce((a,b)=>a+b)
// console.log(r)
//defined the new result as string
//replaces all underscores with spaces

let x = "1,2,3,MM,a,t,r,i,x,_,,_M,a,s,t,e,r,5,2,0,7";
let y= x.split("");
let f = y.filter (  e=> ((e>="a" && e<="z" )||(e>="A" && e<="Z") || (e=="_")) )
let s = f.slice(1,f.length )
let r= s.reduce((a,b)=>a+b)
var str = "Matrix__Master";
var newStr = str.replace(/_/g, " "); 
console.log(newStr); 