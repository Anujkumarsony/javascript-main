let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode==="light") {
        currMode="dark";
        document.querySelector("body").style.backgroundColor = "black" ;
        document.querySelector("p").style.Color = "white" ;
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("p").style.Color = "black";
    }
    console.log(currMode);
});