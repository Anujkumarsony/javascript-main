const fbUser = new Object()  //object create using new keyword
// const fbUser = {}  //create object and then put the data one by one
fbUser.name = "anuj kumar sony"
fbUser.ID = 123
fbUser.isLoggedIn = true

//console.log(fbUser);


//object under object 

const regularUser = {
    Email: "anujkumar@gmail.com",
    userName: {
        fullName: {
            firstName: "anuj",
            lastName: "sony"
        }
    }
}

// console.log(regularUser.userName.fullName.firstName);



