// Array : COLLECTION OF ITEMS -> position index
// create array :

// let heroes  = ["ironman", "hulk", "thor", "Batman"];
// let marks = [96,75,48,83,66];

// let info = ["rahul", 86, "Delhi"];

// let marks = [96, 75, 48, 83, 66];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "anthman"];
// console.log(heroes);
// console.log(typeof heroes);

// array indices -> arr[0] arr[1]..
// string -> immutable
// array -> mutable

// lOOPING OVER AN ARRAY -> print all element of an array
// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// //loop
// for(let idx=0; idx < heroes.length; idx++){
//   console.log(heroes[idx]);
// }

//for of
//for in

// for of
// for(let hero of heroes){
//   console.log(hero);
// }

// let cities = ["delhi","pune", "mumbai", "hyderabad", "gurgaon"];
// for(let city of cities){
//   console.log(city.toUpperCase());
// }

// //prcatice ques
// let marks = [85, 97,44,37, 76, 90]

// let sum = 0 ;

// for (let val of marks){
//   sum = sum + val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

///////// Array in js-> array method //////////

// Push(): add to end
// Pop() : delete from end & return
// toString() : convert array to string

//ex
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();//dlt from end "tomato";
// console.log(foodItems);
// console.log("deleted",deletedItem);

// console.log(foodItems.toString());

// foodItems.push("chips", "burger","paneer");
// console.log(foodItems)

//concat(): join mutiple array and return result
// unshift(): add to start // push
// shift(): dlt from start and return// pop

// ex - concat()

// let = marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman","batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// ex
// let = marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// let val = marvelHeroes.shift();
// console.log("deleted",val);

// silce() - return piece of array
// slice(startidx,endidx)

// splice(): change original Array(add ,remove,replace)
// splice (startidx, delCount,newEl1..)

//ex

// let = marvelHeroes = ["thor", "spiderman", "ironman", "antman", "shaktiman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));//0,1 idx

// ex
let arr = [1, 2, 3, 4, 5, 6, 7];

// //arr.splice(1,2,101,102);

// //add element
// arr.splice(2,0,101);

// //dlt element
// arr.splice(3,1);

// //replace element
// arr.splice(3,1,101);
