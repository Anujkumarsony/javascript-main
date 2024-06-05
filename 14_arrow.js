const user ={
    username: "Anuj",
    price: 999,
//this keyword use only on object not in a function 
    welcomeMassage: function() {
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}
// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()
// console.log(this);

//create a function using arrow function 

// const jsUser=() => {
//     let userName= "anuj"
//     console.log(userName);
// }

// jsUser()

const addTwo = (num1, num2) =>{  //when we write operation in {} this bracket we must use return keyword
    return num1 + num2
}
console.log(addTwo(34,54));

const addThreeNumbers = (num1, num2, num3) =>(  ////when we write operation in () this bracket then we don't use return keyword
    num1+num2+num3
)
console.log(addThreeNumbers(34,55,66));