// const student = {
//   fullName : "neha baghele",
//   marks: 94.6,
//   printMarks : function(){
// console.log("marks = ", this.marks);
//   },
// };

// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary : 50000,
//   calcTax() {
//     console.log("tax rate is 20%");
//   },
// };

// karanArjun__proto__ = employee;
//
// class ToyatoCar {
//   start() {
//     console.log("start");
//   }

//   stop(){
//     console.log("stop");
//   }

//   setBrand(brand){
//     this.brand = brand;
//   }
// }
// let fortuner = new ToyatoCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyatoCar();
// lexus.setBrand("lexus");

// class ToyatoCar {
//   constructor() {
//     console.log("creating new object");
//     this.brand = brand;
//   }
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }
// let fortuner = new ToyatoCar(); //constructor
// let lexus = new ToyatoCar(); //constructor
// let fortuner = new ToyatoCar("fortuner",10); //constructor
// console.log(fortuner);
// let lexus = new ToyatoCar("lexus",12); //constructor
// console.log(lexus);

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }
// class Child extends Parent{}
// let obj = new Child();

class Person {
  constructor() {
    console.log("enter parent constructor");
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("enter child constructor");
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("exist child constructor");
  }
  work() {
    console.log("solve problems,build something");
  }
}
let nehaObj = new Engineer("chemical engg");
