function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by 0";
    }
    return a / b;
}

// Test in the console
console.log(add(3, 5)); // Output: 8
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
console.log(divide(6, 2)); // Output: 3
console.log(divide(6, 0)); // Output: "Error: Division by 0"
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}
let currentInput = "";
let firstNum = null;
let secondNum = null;
let currentOperator = null;

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('btn-clear');
const equalsButton = document.getElementById('btn-equals');

digitButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentInput += e.target.innerText;
        display.innerText = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (firstNum === null) {
            firstNum = parseFloat(currentInput);
            currentOperator = e.target.innerText;
            currentInput = "";
        } else {
            secondNum = parseFloat(currentInput);
            firstNum = operate(currentOperator, firstNum, secondNum);
            currentOperator = e.target.innerText;
            currentInput = "";
            display.innerText = firstNum;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNum !== null && currentOperator !== null && currentInput !== "") {
        secondNum = parseFloat(currentInput);
        firstNum = operate(currentOperator, firstNum, secondNum);
        display.innerText = firstNum;
        currentInput = "";
        currentOperator = null;
    }
});

clearButton.addEventListener('click', () => {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    currentInput = "";
    display.innerText = "0";
});
