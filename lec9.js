//EVENTS -> change in the state of an object
// MouseEvent (click , doubleclick)
// KeyboardEvent (keypress , keyup , keydown)
// Form Event (submit )
// print event & many more

//EVENT HANDLING - js handling
// node.event = () =>{ //btn.onclick,btn.doubleclick....
//   //handle here
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   console.log("HANDLER1");
//   let a = 25;
//   a++;
//   console.log(a);//26
// };

// btn1.onclick = () => {
//   console.log("HANDLER2");
// };

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//   console.log("you are inside div");
// };

//event object -> special object that has details about the event
// all events handlers have access to the event objects prop ans methods .
// node.event= (e)=>{ //e.evt,event
// handle here
// }
//e.target,e.type,e.clientX,e.clientY

// ex

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) =>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

//EVENT LISTENERS ,callback-fuunction/handler

// node.addEventListener(event,callback)
//node.removeEventListener(event,callback)
// note:- the callback refrence should be same to remove

/*let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
  console.log("button1 was clicked");
});

btn1.addEventListener("click",()=>{
  console.log("button1 was clicked - handler2");
});*/

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",evt) => {
//   console.log("button1 was clicked");
//   console.log(evt);
//   console.log(evt.type);
// });

//
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler2");
});

const handler3 = () => {
  console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler4");
});
btn1.removeEventListener("click", handler3);
