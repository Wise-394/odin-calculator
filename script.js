function add(a, b) {
    console.log(a + b)
}

function subtract(a, b ) {
    console.log(a - b)
}

function multiply(a, b) {
    console.log(a * b)
}

function divide(a, b) {
    console.log(a / b)
}

function operator(a, b, operation) {
    switch(operation){
        case "+":
            add(a,b)
            break;
        case "-":
            subtract(a,b)
            break;
        case "*":
            multiply(a,b)
            break;
        case "/":
            divide(a,b)
            break;
    }
}