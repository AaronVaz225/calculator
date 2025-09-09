
// Buttons
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const clearButton = document.getElementById("clear");
const negativeButton = document.getElementById("negative");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
let displayArea = document.getElementById("display");
const audio = document.getElementById("bgm");

let runningTotal = [];
let total = 0;

function changeDisplay(button) {

    //Clear Display If it gets too long :(
    if (displayArea.innerText.length < 15 && displayArea.innerText !== "Error") {
        displayArea.innerText += button;
    } else {
        displayArea.innerText = "Error";
    }

 
    if (`${Number(button)}` === "NaN") {
        runningTotal.push(button);
    } else {
        runningTotal.push(Number(button));
    }
    
    
   

}




function clearDisplay() {
    displayArea.innerText = "";
    runningTotal = [];
}




function calculateTotal() {
   


    for (let i = 0; i < runningTotal.length; i++) {
        if (typeof runningTotal[i] !== "number") {

            switch (runningTotal[i]) {
                case "+" :
                    total = runningTotal[i - 1] + runningTotal[i + 1];
                    break;
                case "-" :
                    total = runningTotal[i - 1] - runningTotal[i + 1];
                    break;
                case "*" :
                    total = runningTotal[i - 1] * runningTotal[i + 1];
                    break;
                case "/" :
                    total = runningTotal[i - 1] / runningTotal[i + 1];
                    break;

            }

        
        } 


    }

    displayArea.innerText = total;
    
    console.log(runningTotal);
    console.log(total)

}


function enableSound() {
    audio.muted = false; //unmute
    const p = audio.play(); 

    //we don't need that
    // document.removeEventListener("click", enableSound);
}


// Event listeners

zeroButton.addEventListener("click", () => {
    changeDisplay("0");
});

oneButton.addEventListener("click", () => {
    changeDisplay("1");
})

twoButton.addEventListener("click", () => {
    changeDisplay("2");
})

threeButton.addEventListener("click", () => {
    changeDisplay("3");
})

fourButton.addEventListener("click", () => {
    changeDisplay("4");
})

fiveButton.addEventListener("click", () => {
    changeDisplay("5");
})

sixButton.addEventListener("click", () => {
    changeDisplay("6");
})

sevenButton.addEventListener("click", () => {
    changeDisplay("7");
})

eightButton.addEventListener("click", () => {
    changeDisplay("8");
})

nineButton.addEventListener("click", () => {
    changeDisplay("9");
})

clearButton.addEventListener("click", clearDisplay);

negativeButton.addEventListener("click", () => {
    console.log("negativeButton Clicked")
})

addButton.addEventListener("click", () => {
    changeDisplay("+");
})

subtractButton.addEventListener("click", () => {
    changeDisplay("-");
})

multiplyButton.addEventListener("click", () => {
    changeDisplay("*");
})

divideButton.addEventListener("click", () => {
    changeDisplay("/");
})


decimalButton.addEventListener("click", () => {
    changeDisplay(".");
})


equalsButton.addEventListener("click", calculateTotal);

document.addEventListener("click", enableSound)