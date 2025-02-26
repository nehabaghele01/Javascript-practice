// console.log("welcome to javascript");
// console.log("Neha Baghele");
// Dynamically typed 
// rules - 1) case sensitive 2) only letters, digits , _ ,$ is allowed. 3)letter ,underscore,$ should be first char.4)reserved words cannot be variale name.


// DATA TYPES 
// Number, String, Boolean, undefined,null,BigInt,Symbol 


// let fullName = "Neha Baghele";
// let age = 18;
// let price = 99.99;
// let x=null;
// let y=undefined;
// console.log(x);
// let isFollow = true;
// console.log(isFollow);


//special case 
// let fullName1 = 25;
// console.log(fullName1);

// let keyword

// let fullName = "Neha Baghele";
// let $fullName = "Neha Baghele";
// let _fullName = "Neha Baghele";
// let age = 18;
// let totalPrice = 1000;

// console.log($fullName);
// console.log(_fullName);
// console.log(age);
// console.log(totalPrice);

// let age = 24;
// age = 59;
// age = 86;
// console.log(age);

// const PI = 3.14;
// console.log(PI);

// var age = 24;
// var age = 59;
// var age = 86;
// console.log(age);

// let a;
// a=10;
// console.log(a);

// let age = 24;
// let price = 100.5;
// console.log(price);

// isFollow = true;
// console.log(isFollow);

// let x = BigInt("1234635732");
// let y = Symbol("Hello");
// console.log(x);

const student = {
  fullName : "rahul kumar",
  age : 20,
  cgpa: 8.3,
  isPass : true,
};
// console.log(student);
// console.log(student.age);
// console.log(student.cgpa);

student["age"] = student["age"] + 1;
console.log(student["age"]);

// or 

student["fullName"] = "Neha Baghle";
console.log(student["fullName"]);

// PRACTICE Question
const product = {
  fullName :"Ball Pen",
  rating : 4,
  offer: 5,
  price :270,


};
console.log(product);
console.log(product.offer);

// comments in javascript 
 
// -> for single line 
/* multiline 
comments */ 