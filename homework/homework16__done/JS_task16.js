let num = Number(prompt("Enter your number for calculeted facorial"));
if (isNaN(num)) {
    do {
        num = Number(prompt("Your number must be more or equale 0. Enter your number."))
    } while (!num)
} else {
    let result = factorial(parseInt(num));
    alert("Factorial of " + num + " is " + result);
}

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
