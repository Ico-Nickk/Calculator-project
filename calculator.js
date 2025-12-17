function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide (a, b) {
    return a/b;
};

const operations = {
    "add": add(),
    "subtract": subtract(),
    "multiply": multiply(),
    "divide": divide(),
};

let num1 = 0; 
let num2 = 0;
let operator = "";

function operate(arr) {
    [num1, operator, num2] = arr;
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default: 
            console.log(`${operator} is not a valid operation`);
    };
};

const calcDisplay = document.querySelector("#calcDisplay");

let opperationArr = []

function updateDisplay (val) {
    opperationArr.push(val)
    calcDisplay.textContent = calcDisplay.textContent + val;
    if(opperationArr.length === 3) {
        console.log(opperationArr);
        calcDisplay.textContent= operate(opperationArr);
    };

};

const bttn1 = document.querySelector("#num1");
bttn1.addEventListener("click", () => updateDisplay(Number(bttn1.value)));

const addBttn = document.querySelector("#addBttn");
addBttn.addEventListener("click", () => updateDisplay(addBttn.value));

const bttn2 = document.querySelector("#num2");
bttn2.addEventListener("click", () => updateDisplay(Number(bttn2.value)));


