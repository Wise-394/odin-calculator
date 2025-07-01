//DOM
const calButtons = document.querySelectorAll(".cal-button")
const AnswerLabel = document.querySelector("#answer")
const numberLabel = document.querySelector("#number-label")

//JS VARIABLES
let numString = ""
let num1 = ""
let num2 = ""
let operation = ""

function add(a, b) {
    console.log(a + b)
}

function subtract(a, b) {
    console.log(a - b)
}

function multiply(a, b) {
    console.log(a * b)
}

function divide(a, b) {
    console.log(a / b)
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
function handleClick(value) {
    const specialOperation = ["C", "=",]

    if (!specialOperation.includes(value)) {
        numString += value
        numberLabel.textContent = numString
        return
    }
    if (value === specialOperation[0]) {
        numString = ""
    }
    numberLabel.textContent = numString


}


function main() {

    calButtons.forEach((btn) =>
        btn.addEventListener("click", () => handleClick(btn.textContent))
    )
}
main()
