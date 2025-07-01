//DOM
const calButtons = document.querySelectorAll(".cal-button")
const AnswerLabel = document.querySelector("#answer")
const numberLabel = document.querySelector("#number-label")

//JS VARIABLES
let numString = ""

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
function handleClickButton(value) {
    const specialOperation = ["C", "=",]

    if (!specialOperation.includes(value)) {
        numString += value
        numberLabel.textContent = numString
        return
    }
    if (value === "C") {
        numString = ""
    } else if (value === "=") {
        solveEquation()
    }
    numberLabel.textContent = numString
}

function solveEquation() {
    let numArr = numString.split(/([+\-*/])/)
    const num1 = numArr[0]
    const operation = numArr[1]
    const num2 = numArr[2]
    switch(operation){
        case "+":
            add(+num1,+num2)
            break
        case "-":
            subtract(+num1,+num2)
            break
        case "*":
            multiply(+num1,+num2)
            break
        case "/":
            divide(+num1,+num2)
            break
    }

}


function main() {

    calButtons.forEach((btn) =>
        btn.addEventListener("click", () => handleClickButton(btn.textContent))
    )
}
main()
