// console.log("hello");
// window.console.log("hello sir")

//console.dir => document =>properties and methods 

//html element access by ID
// let user = document.getElementById("heading");  // h2;
// console.log(user);

//html element acess by class, we aceess html collection by class

// let heading  = document.getElementsByClassName("heading2")
// console.log(heading);

//access the hrml element by using tagname 

// let paragraph = document.getElementsByTagName("p")
// console.log(paragraph);

//access the html element by query selector we can put anything like id name class name tagname
//return first element 

let element = document.querySelector("#heading2");
console.dir(element)

// return all element
// let element2 = document.querySelectorAll("p");
// console.dir(element2);

//access tag name by tagname 
let element = document.querySelector("heading2");
console.dir(element)

element.tagName




