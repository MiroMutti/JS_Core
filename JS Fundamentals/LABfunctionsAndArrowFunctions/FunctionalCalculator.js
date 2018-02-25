function calculator(a, b, op) {
    let add = function (a, b) {return a+b}
    let substract = function (a, b) {return a-b}
    let multiply = function (a, b) {return a*b}
    let divide = function (a, b) {return a/b}
    switch (op){
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
        case '+': return add(a, b)
        case '-': return substract(a, b)
    }
}