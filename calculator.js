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

let num1 = "";
let opperator = "";
let num2 = "";
let resultOfOperation = "";
const calcDisplay = document.querySelector("#calcDisplay");

function operate(a, b, c) {
    [a, c] = [Number(a), Number(c)];
    switch (b) {
        case "+":
            return add(a, c);
            break;
        case "-":
            return subtract(a, c);
            break;
        case "*":
            return multiply(a, c);
            break;
        case "/":
            return divide(a, c);
            break;
        default: 
    };
};


function display (val) {
    calcDisplay.textContent = calcDisplay.textContent + val;
};

function saveVal (val) {
    let resultOfOperationIsEmpty = (resultOfOperation === "");
    let operatorIsEmpty = (opperator = "");

    if (!(resultOfOperationIsEmpty) && operatorIsEmpty) {
        num1 = val;
        console.log(`$num1 is ${num1}`);
        calcDisplay.textContent = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
    } else if (opperator === "") {
        num1 = num1 + val;
        console.log(num1);
    } else {
        num2 = num2 + val;
        console.log(`num2 is ${num2}`)
    };
};

function saveopperator (val) {
    opperator = val;
    console.log(opperator);
};

function numClicked (number) {
    saveVal(number);
    display(number);
};

function signClicked (sign) {
    if (!(num1 === "") && !(num2 === "")) { //ensure first two numbers are used in calculation before the third
        num1 = operate(num1, opperator, num2);
        opperator = "";
        num2 = "";
    } else if (num2 === "") {
        calcDisplay.textContent = calcDisplay.textContent;
    };
    saveopperator(sign);
    display(sign);  
};

function equalSign () {
    let num2IsEmpty = (num2 === "");
    if (num2IsEmpty) {
        console.log(1);
        calcDisplay.textContent = "";
        num1 = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
    } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.log(2);
        calcDisplay.textContent = "error";
        num1 = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
    } else {
        console.log(3);
        resultOfOperation = operate(num1, opperator, num2);
        calcDisplay.textContent = resultOfOperation.toFixed(2);
        num1 = resultOfOperation;
        opperator = "";
        num2 = "";
    };
        resultOfOperation = operate(num1, opperator, num2);
        calcDisplay.textContent = resultOfOperation;
        num1 = resultOfOperation;
        opperator = "";
        num2 = "";
};

function MemoryClear () {
    calcDisplay.textContent = "";
    num1 = "";
    opperator = "";
    num2 = "";
    resultOfOperation = "";
};

const numBttns = document.querySelectorAll(".calcBttns.number");
numBttns.forEach(bttn => {
    bttn.addEventListener("click", () => numClicked(bttn.value));
});

const signBttns = document.querySelectorAll(".calcBttns.sign");
signBttns.forEach(bttn => {
    bttn.addEventListener("click", () => signClicked(bttn.value));
});

const clearBttn = document.querySelector("#clearBttn");
clearBttn.addEventListener("click", () => MemoryClear());

const equalBttn = document.querySelector("#equalBttn");
equalBttn.addEventListener("click", equalSign);
