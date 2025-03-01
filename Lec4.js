// LOOPS & STRINGS
// STRINGS -> SEQ OF CHARACTER USED TO REPRESENT TEXT

// 1. CREATE STRING -> let str = "Apna College";
// let str2 = "Neha Baghele";

// 2. STRING LENGHT -> str.length

// 3. STRING INDICES -> str[0],str[1],str[2]

// let str = "apnacollege";
// console.log(str[9]);//g

// Template litrals in js -> A way to have embedded expression in strings

`this is a template literal`;

// string interpolation -> create string by doing substitution of placeholders
//`string text ${expression} string text`

//ex:tempplate literals

// let specialString = `this is a template literal`;
// console.log( typeof specialString);//string

//
// let obj= {
//   item: "pen",
//   price: 10,
// };
//`string text ${expression} string text`
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of",obj.item, "is",obj.price, "rupees");

// let specialString = `this is a template literal ${1+2+3}`;
// console.log(specialString);//6

// let str = "Apna\tCollege";
// console.log(str.length);//12

// \t - tab space, \n - next line //escape character

// STRING METHODS : BUILT IN FUNCTION TO MANIPULATE A STRING

//1. str.toUpperCase(); //all char to upper case
//2. str.toLowerCase(); //all char to lower case
//3. str.trim(); //remove whitespaces From start and end

//ex
// let str = "ApnaCollege";
// let newStr= str.toUpperCase();
// console.log(str);
// console.log(newStr);

// let = "    Neha Baghele    ";
// console.log(str.trim());

// 4.str.silce(start,end?)// return part of string
//5. str1.concat(str2)// to join both the string
//6. str.replace(searchVal, newVal)
//7. str.charAt(idx)

// ex
// let str = "01234567";
// console.log(str.slice(1,6));//12345 end v is excluded

// let str1 = "your";
// let str2 = "college";

// let res = str1.concat(str2);
// let res = str1 + str2 ;
// console.log(res);

// let str = "hellow";
// console.log(str.replace("h","y"));

// let str = "ILOVEJS";
// console.log(str.charAt(3));//V Return value by index

//practice ques

// let fullName = prompt("Enter your fullName without spaces");
// let username = "@" + fullName + fullName.length;
// console.log(username);
