//FUNCTIONSN->BLOCK OF CODE THAT PERFORM A SPECIFIC TASK

// FUNCTION DEFINITION ->
//  function functionName(){
//   do some work
// }

//DUNCTION CALL
// functionName();

// function functionName(param1, param2...){
//   do some work
// }

// function myFunction(){
//   console.log("Welcome to apna college");
//   console.log("We are learning JS");
 
// }
// myFunction();

//REDUNDANCY -> REPEAT 

// function myFunction(msg, n){
//   //parameter -> input
//   console.log(msg*n);
// }; 
// myFunction("I lOVE js ",100);//argument

//function -> 2 num ka sum 
// function sum(x,y){
//   console.log(x+y);
// }
// sum(121,223);

// function sum(x,y){
//   s = x+y;
//   return s;
// }
// let val = sum(3,4);
// console.log(val);

// func param like local variables of function -> block scope 

//ARROW FUNCTION
// COMAPACT WAY OF WRITING A FUNCTION

// const functionName = (PARAM1 ,PARAM2..)=>{
//   do some work 
// }

// ex
//sum function
// function sum(a,b){
//   return a+b;
// }

//multiplication function
// function mul(a,b){
//   return a*b;
// }

// const arrowSum = (a,b) => {
//   console.log(a+b);
// };

// const arrowMul = (x,y) => {
//   return x*y;
// };

// const printHello = () => {
//   console.log("hello");
// };

 //practices
//  function countVowels(str){
//   for(const char of str){
//     console.log(char);
//   }
//  }
//  countVowels("neha");

//  function countVowels(str){
//   let count = 0;
//   for (const char of str){
//     if(
//       char == "a" || 
//       char == "e" || 
//       char == "i" || 
//       char == "o" || 
//       char == "u" 
//       ) 
//     {
//       count++
//     }
//   }
//   return count;
//  }
//  "a"-> 1
//  "n"-> 0

// LOOPS IN ARRAY  
// FOR EACH LOOP 
// Arr.forEach(callBackFunction)

// callBackFunction: fn to execute for each element in the array 
// it is passed as an argument to another function 

// syntax: Arr.forEach((val)=>{
//   console.log(val);
// })
// ex
let array = [1,2,3,4,5];

array.forEach(function printVal(val){
  console.log(val);
});
 
// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val)=>{
// console.log(val);
// });

// print value , idx , array ,item, pos.

// let arr = ["pune", "delhi","mumbai"];
// arr.forEach((val,idx,arr)=>{
//   console.log(val.toUpperCase(),idx,arr);
// });

// also called HOF / HOM 
// Higher order function / methods
// means fn parameter 
// fn return

//practices
// let arr = [1,2,3,4];
// arr.forEach((num)=>{
//   console.log(num * num);// num**2
// });

// ex 
// let nums = [67,52,56];
// let calcSquare = (num) =>{
//   console.log(num*num);
// };
// nums.forEach(calcSquare);

//SOME MORE ARRAY METHODS
// MAP //FILTER //REDUCE
// 1. MAP 
// create a new array with the result of some operation . the value its callback returns are used to form new arry 

// arr.map(callbackFnx(value,index,array))

// ex 
// let nums = [ 67, 52,  39];

// let newArr = nums.map((val)=>{
// return val*2;
// });
// console.log(newArr);

// let calcSquare = (num) => {
//   console.log(num * num);
// };


//FILTER
// create a new array that give true for a condition or filter 
// ex : all even elements 

// let arr = [1,2,3,4,5,6,7,12,36];
// let evenArr = arr.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(evenArr);

//REDUCE 
// PERFORM OPERATION & REDUCES THE ARRAY TO SINGLE VALUE AND RETURN THAT SINGLE VALUE 
// FOR EX SUM AND AVG OF MULTIPLE NUMBERS OF ARRAY 

let arr = [1,2,3,4];

const output = arr.reduce((res,curr)=>{
  return res + curr;
});
console.log(output);

