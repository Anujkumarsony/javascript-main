// function sayMyName() {  //create a function with sayMyName this name 
//     console.log("A");
//     console.log("N");
//     console.log("U");
//     console.log("J");
// }

// sayMyName()   //call this function

// //function with some parameter

// function addTwoNumber(num1, num2) {  //num1 and num2 is parameter
//     console.log(num1+num2)
    
// }
// addTwoNumber(23,45)  //23,45 is arguments

// //using return 
// function addThreeNumbers(num1, num2, num3) {
//     let result = num1+num2+num3;
//     return result;
    
// }
// const result = addThreeNumbers(34,56,89);
// console.log(result);

function userLogin(username) {
    if (username===undefined) {
        console.log("enter your name");
    }
    return `${username} you are log in `
}
const massage = userLogin("anuj")
console.log(massage);

//using creating object

const user={
    fullName: "anuj kumar sony",
    sysID: 123,
    userState: "Bihar"
}

function userDetail(anyObject) {
    console.log(`user fullname is ${anyObject.fullName} user sysId is ${anyObject.sysID} and userState is${anyObject.userState}`)
    
}
userDetail(user)
