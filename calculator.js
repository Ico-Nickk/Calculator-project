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
            console.log(`${operator} is not a valid operation`);
    };
};


function display (val) {
    calcDisplay.textContent = calcDisplay.textContent + val;
};

function saveNum (val) {
    if (!(resultOfOperation === "") && (opperator === "")) {
        num1 = val;
        calcDisplay.textContent = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
        console.log("resetting values");
    } else if (opperator === "") {
        num1 = num1 + val;
        console.log(`num1 = ${num1}`);
    } else {
        num2 = num2 + val;
        console.log(`num2 = ${num2}`);
    };
};

function saveopperator (val) {
    opperator = val;
    console.log(`opperator = ${opperator}`);
};

function numClicked (number) {
    saveNum(number);
    display(number);
};

function signClicked (sign) {
    if (!(num1 === "") && !(num2 === "")) { //ensure first two numbers are used in calculation before the third
        num1 = operate(num1, opperator, num2);
        opperator = "";
        num2 = "";
        console.log("im running")
    } else if (num2 === "") {
        calcDisplay.textContent = calcDisplay.textContent;
    }
    saveopperator(sign);
    display(sign);  
    console.log(` signClicked function is running num1 = ${num1} \n num2 = ${num2} \n opperator = ${opperator}`)
};

function equalSign () {
    console.log("equal pressed")
    if (num2 === "") {
        calcDisplay.textContent = "";
        num1 = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
    } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
        calcDisplay.textContent = "error";
        num1 = "";
        opperator = "";
        num2 = "";
        resultOfOperation = "";
    } else {
        resultOfOperation = operate(num1, opperator, num2);
        calcDisplay.textContent = resultOfOperation.toFixed(2);
        num1 = resultOfOperation;
        opperator = "";
        num2 = "";
        console.log(`resultOfOperatione is ${resultOfOperation}, num1 is ${num1}, num2 is ${num2}, opperator is ${opperator}`);
    };


};

function MemoryClear () {
    calcDisplay.textContent = "";
    num1 = "";
    opperator = "";
    num2 = "";
    resultOfOperation = "";
};

//code to activate and deactivate decimal button


const decimalBttn = document.querySelector("#decimalBttn");
decimalBttn.addEventListener("click", () => numClicked(decimalBttn.value));

const bttn1 = document.querySelector("#num1");
bttn1.addEventListener("click", () => numClicked(bttn1.value));

const addBttn = document.querySelector("#addBttn");
addBttn.addEventListener("click", () => signClicked(addBttn.value));

const bttn2 = document.querySelector("#num2");
bttn2.addEventListener("click", () => numClicked(bttn2.value));

const clearBttn = document.querySelector("#clearBttn");
clearBttn.addEventListener("click", () => MemoryClear());

const equalBttn = document.querySelector("#equalBttn");
equalBttn.addEventListener("click", equalSign);

const multiplyBttn = document.querySelector("#multiplyBttn");
multiplyBttn.addEventListener("click", () => signClicked(multiplyBttn.value));




