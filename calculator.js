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

function operate(num1, num2, operation) {
    operator = operation;
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

