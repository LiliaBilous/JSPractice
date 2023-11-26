// Отримати від користувача порядковий номер n
const n = parseInt(prompt("Введіть порядковий номер n:"));

// Введіть значення F0 та F1
const F0 = parseInt(prompt("Введіть значення F0:", 0));
const F1 = parseInt(prompt("Введіть значення F1:", 1));

function fibonacci(F0, F1, n) {
  if (n === 0) {
    return F0;
  } else if (n === 1) {
    return F1;
  } else if (n > 1) {
    return (
        fibonacci(F0, F1, n - 1) +
        fibonacci(F0, F1, n - 2)
    );
  } else if (n < 0 && n % 2 === 0) {
    return -fibonacci(F0, F1, -n);
  } else {
    return fibonacci(F0, F1, -n);
  }
}

const result = fibonacci(F0, F1, n);
alert(`n-те число узагальненої послідовності Фібоначчі: ${result}`);
