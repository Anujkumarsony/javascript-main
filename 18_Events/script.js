let bt1 = document.querySelector("#bt1");
// bt1.onclick = () => {
//     console.log("bt1 was clicked");
//     let a = 29;
//     a++;
//     console.log(a);
// }
// bt1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
    
// }
// //override 
// // bt1.onclick = () => {
// //     console.log("bt1 was clicked 2");
// //     let a = 29;
// //     a++;
// //     console.log(a);
// // }
let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("mouse in div");
// }

// add event by using event listner 

bt1.addEventListener("click", () => {
    console.log("bt1 was clicked");

})
const clicked2 = () => {
    console.log("bt1 was clicked2");

}
bt1.addEventListener("click", clicked2)

bt1.addEventListener("click", () => {
    console.log("bt1 was clicked3");

})
//remove the event handler
bt1.removeEventListener("click", clicked2)

bt1.addEventListener("dblclick", () => {
    console.log("bt1 was  dbclicked");

})
