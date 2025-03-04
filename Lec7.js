//DOM-> document object model part-1
// dynamic changes manipulation
// STARTER CODE -> <style> tag used to connect html with css
// <script> tag used to connect html with js

// Window object -> represent an open window in browser,it is browser object not js and it is automatically created by browser, it is a global object

// console.log("hello");
// window.alert("hello");

// DOM-> when a web page is loaded ,the browser creates a dom of the page .
// console.log -> print
// console.dir -> document -> prop methods

// console.log(document.body);
// console.dir (document.body);
// console.log(document.body.childNodes[1]);

// DOM MANIPULATIONS
// selecting with id -> document.getElementnBYId("myId");
// selecting with class -> document.getElementsByClassName("myclass");
// selecting with tag -> document.getElementsByTagName("p");

let heading = document.getElementById("heading-id"); //h1
console.dir(heading);
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings); //html collection -> array

// QUERY SELECTOR
// document.querySelector("myId/myClass/tag");
//returns first element

// document.querySelectorAll("myId/myClass/tag");
//returns a NodeList

let firstEl = document.querySelector("p"); // 1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // all element
console.dir(allEl);

//PROPERTIES
//  tagName - RETURN TAG
// innerText - RETURN THE TEXT CONTENT
// innerHTML - RETURNS PLAIN TEXT/HTML CONTENTS
// textContent - TEXTUAL CONTENT EVEN FOR HIDDEN ELEMENTS

console.dir(document.body.firstChild);
