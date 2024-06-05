/* scope  
    {

    }
*/

var c = 200;
//let a = 200;
const b=600;
if (true) {
    let a =400;
    //const b = 800;
    var z= 900;
    // console.log("inner", a);
    // console.log("inner", b);
    
}
// console.log(a);
// console.log(b);
//console.log(z);

function one() {
    const userName = "anuj kumar sony"
    const ID = 123

    function two() {
        const state = "Bihar"
        console.log(userName);
    }
    console.log(ID);
    two()
    
}
one()