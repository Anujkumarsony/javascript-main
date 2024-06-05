// const userDetail= {
//     fullname: "anuj kumar sony",
//     Email: "anuj@google.com",
//     isLogedIn: true,
//     place: "delhi",
//     "FirstName": "Anuj"
// }
// //console.log(userDetail);
// // console.log(userDetail.Email);
// // console.log(userDetail["FirstName"]);
// // console.log(userDetail);

// userDetail.Email = "anujkumarrr0@gmail.com"
// //console.log(userDetail);
// Object.freeze(userDetail)  // freeze the data of object
// userDetail.Email = "anuj@gmail.com"

// //console.log(userDetail)




const userDetail = {
    fullname: "anuj kumar sony",
    Email: "anuj@google.com",
    isLogedIn: true,
    place: "delhi",
    "FirstName": "Anuj"
};

userDetail.greeting = function(){
    console.log("Hello JS user");
};

userDetail.greetingTwo = function(){
    console.log(`Hello JS user, ${this.fullname}`);
};

userDetail.greeting();
userDetail.greetingTwo();



