//for 

for (let i = 0; i <=10; i++) {
    const element = i;  
    if (element==5) {
        //console.log("5 is the best number");    
    }
    //console.log(element);
}
// // console.log(element);  //we can't access element outside 

for (let i = 0; i <=10; i++) {
    //console.log(`outer loop value ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value ${j}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

//while loop

let index = 0
while (index <= 10) {
    //console.log(`index value is ${index}`);
    index = index + 2
}

let myArray = ['ironman', 'thor', 'superman']
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+2
}