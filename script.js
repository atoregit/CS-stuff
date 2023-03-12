
function add() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var sum = num1 + num2;
    return giveResult("sum", num1, num2, sum);
}

function sub() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var diff = num1 - num2;
    return giveResult("difference", num1, num2, diff);
}

function mult() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var product = num1 * num2;
    return giveResult("product", num1, num2, product);
}

function div() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var quotient = num1 / num2;
    return giveResult("quotient", num1, num2, quotient);
}

function mod() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var remainder = num1 % num2;
    return giveResult("remainder", num1, num2, remainder);
}

function giveResult(operation, num1, num2, result) {
    document.getElementById("result").innerHTML = "The " + operation + " of " + num1 + " and " + num2 + " is " + result + ".";
}
