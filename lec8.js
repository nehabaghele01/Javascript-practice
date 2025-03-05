// DOM MANIPULATION
// ATTRIBUTES
// getAttribute(attr) // to get the attribute value
// setAttribute(attr,value)// set the attributes value

//code
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

//STYLE
// node.style

//css
// let div = document.querySelector("div");

// div.style.backgroundColor = "GREEN";
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";
// div.style.fontSize = "20px";
// div.innerText = "NEHA BAGHELE";

//INSERT ELEMENTS ex: let el = document.createElement("div")

// node.append(el)// add at the end of node inside
// node.prepend(el)//add at the start of node inside
// node.before(el)// add before the node outside
// node.after(el)// add after the node outside

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi , i am new</i>";
document.querySelector("body").prepend(newHeading);
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

// DELETE ELEMENTS
//node.remove()//remove the node

newHeading.remove();
//appendChild , removeChild
