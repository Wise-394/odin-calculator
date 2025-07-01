//DOM
const calButtons = document.querySelectorAll(".cal-button")
const AnswerLabel = document.querySelector("#answer")
const numberLabel = document.querySelector("#number-label")

//JS VARIABLES
let numString = ""

//a boolean variable to ensure only 1 operation will be in numstring
let isOperatorSelected = ""

function add(a, b) {
    updateAnswer(a + b)
}

function subtract(a, b) {
    updateAnswer(a - b)
}

function multiply(a, b) {
    updateAnswer(a * b)
}

function divide(a, b) {
    updateAnswer(a / b)
}

function operator(a, b, operation) {
    switch (operation) {
        case "+":
            add(a, b)
            break;
        case "-":
            subtract(a, b)
            break;
        case "*":
            multiply(a, b)
            break;
        case "/":
            divide(a, b)
            break;
    }
}

//the value of button if its a number or operator
function handleClickButton(value) {
    const OPERATORS = ["+", "-", "*", "/"];
    const isSpecial = ["C", "=", ...OPERATORS].includes(value);

    if (!isSpecial) {
        console.log(true)
        appendDigit(value);
        return;
    }
    //if operator is clicked 

    if (value === "C") {
        clearAll();
    } else if (value === "=") {
        solveEquation();
    } else if (OPERATORS.includes(value)) {
        onOperator(value);
    }

    updateDisplay();
}


function appendDigit(digit) {
    numString += digit;
    numberLabel.textContent = numString;
}

function clearAll() {
    numString = "";
    AnswerLabel.textContent = ""
    isOperatorSelected = false;
}

function onOperator(op) {
    if (isOperatorSelected) return;
    if (numberLabel.textContent === "") return
    isOperatorSelected = true;
    numString += op;
}

function updateDisplay() {
    numberLabel.textContent = numString;
}
function updateAnswer(answer) {
    AnswerLabel.textContent = answer
}

function solveEquation() {
    let numArr = numString.split(/([+\-*/])/)
    const num1 = numArr[0]
    const operation = numArr[1]
    const num2 = numArr[2]
    switch (operation) {
        case "+":
            add(+num1, +num2)
            break
        case "-":
            subtract(+num1, +num2)
            break
        case "*":
            multiply(+num1, +num2)
            break
        case "/":
            divide(+num1, +num2)
            break
    }

}


function main() {

    calButtons.forEach((btn) =>
        btn.addEventListener("click", () => handleClickButton(btn.textContent))
    )
}
main()
