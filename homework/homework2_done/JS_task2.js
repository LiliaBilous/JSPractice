console.log("____task 2.1____");

let number = Number(prompt("Enter your number", ""));

while (Number.isInteger(number) === false) {
    number = +prompt("Number must be integer. Enter your number", "");
} 

if (number > 4) {
    for(let i = 5; i<=number; i += 5) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
} else {
    console.log('Sorry, no numbers');
}

console.log("____task 2.2____");
//прості числа - 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113 , 127, 131, 137, 139, 149 
let m, n;

m = parseInt(prompt("Enter your first number"));
n = parseInt(prompt("Enter your second number"));

while (Number.isInteger(m) === false || m <= 1 || m === NaN) {
    m = +prompt("Your number should be more than 1. Enter your first number.");
}

while (Number.isInteger(n) === false || n <= m) {
    n = +prompt("Your second number should be more than first. Enter your second number.");
}

for (let k = m; k <= n; k++) {
    let isPrime = true;
    let r = Math.sqrt(k); 

    for (let i = 2; i <= r; i++) {
        if (k % i == 0) {
            isPrime=false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(k);
    }
}