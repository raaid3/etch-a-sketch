
// getting reference to main container
let mainContainer = document.querySelector("#mainContainer");

// adding 16x16 grid
for(let i = 0; i < 256; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    mainContainer.appendChild(box);
    box.style.opacity = "0";
}

mainContainer.addEventListener("mouseover", (event)=>{
    if(event.target.classList.contains("box")){
        let b = event.target;
        b.style.backgroundColor = `rgb(${randomInt(266)}, ${randomInt(266)}, ${randomInt(266)})`;
        // b.style.backgroundColor = "black";
        b.style.opacity = `${+b.style.opacity + 0.1}`
        // b.style.opacity = `${+b.style.opacity + 0.1}`;
    }
})

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

mainContainer.addEventListener("mouseout", (event)=>{
    if(event.target.classList.contains("box")){
        let b = event.target;
        b.style.backgroundColor = "";
    }
})

let button = document.querySelector("button");

button.addEventListener("click", (event)=>{
    let userInput = prompt("Enter new amount of squares: ", "16");
    if(+userInput > 100){
        do {
            userInput = prompt("Enter amount below 100: ", "16");
        } while (+userInput > 100);
    }
    if(+userInput < 1){
        do {
            userInput = prompt("Enter amount above 1: ", "16");
        } while (+userInput < 1);
    }
    console.log(userInput);
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        // box.style.width = `calc(100% / ${userInput})`;
        box.remove();
    })
    let total = +userInput * +userInput;
    for(let i = 0; i < total; i++){
        let box = document.createElement("div");
        box.classList.add("box");
        mainContainer.appendChild(box);
        box.style.flexBasis = `calc(100% / ${userInput})`;
        box.style.opacity = "0";
    }
})

