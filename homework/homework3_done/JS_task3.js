let firstNum;
let secondNum;
let markMath;

do {
    firstNum = Number(prompt("Enter your first number for Math."));
} while (!firstNum)
do {
    secondNum = Number(prompt("Enter your second number for Math."));
} while (!secondNum)
do {
    markMath = prompt("Enter your Math operator. It's can be only +,-,*,/");
} while (markMath != "+" && markMath != "-" && markMath != "*" && markMath != "/")


function doMath (firstNum, secondNum, markMath) {
    let result;

    if (markMath === "+") {
        result = firstNum + secondNum;
    } else if (markMath === "-") {
        result = firstNum - secondNum;
    } else if (markMath === "*") {
        result = firstNum * secondNum;
    } else if (markMath === "/") {
        result = firstNum / secondNum;
    }
    console.log(`${firstNum}${markMath}${secondNum} = ${result}`)
    return result;
}
doMath(firstNum, secondNum, markMath);