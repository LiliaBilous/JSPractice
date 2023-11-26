function createNewUser() {
  let firstName = prompt("What is your first name?", "name");
  let lastName = prompt("What is your last name?", "lastname");
  let newUser = {
    getFirstName() {
      return firstName;
    },
    getLastName() {
      return lastName;
    },
    getLogin() {
      let login = firstName[0].toLowerCase() + lastName.toLowerCase();
      return login; 
    },
    setFirstName(newFirstName) {
      firstName = newFirstName;
    },
    setLastName(newLastName) {
      lastName = newLastName;
    },
  };
  alert(`Your login is: ${newUser.getLogin()}`);
  return newUser;
}
const user = createNewUser();
console.log(user.getLogin());

// #1----------------------

// let product = new Object();
// product.name =  "Laptop";
// product.price = 1200;
// product.price = 1000;
// console.log(product);
// delete product.name;
// console.log(product);

// #2-----------------------

// let salaries = { John: 100,
//     Ann: 160,
//     Peter: 130
//     }
// let sum = 0;
// for(let item in salaries) {
//     sum += salaries[item];
// }
// console.log(sum);

// #3-----------------------

// let calculator = {
//   firstNumber: 0,
//   secondNumber: 0,
//   read() {
//     return (
//       (this.firstNumber = prompt("Enter first number: ", 10)),
//       (this.secondNumber = prompt("Enter second number: ", 1))
//     );
//   },
//   sum() {
//     return Number(this.firstNumber) + Number(this.secondNumber);
//   },
//   mul() {
//     return this.firstNumber * this.secondNumber;
//   },
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// #4-----------------------

// function Calculator() {
//   this.read = function() {
//     this.number1 = prompt("Enter first number: ", 100);
//     this.number2 = prompt("Enter second number: ", 10);
//   },
//   this.sum = function() {
//     return parseInt(this.number1)+parseInt(this.number2);
//   },
//   this.mul = function() {
//     return this.number1*this.number2;
//   }
// }
// let calculator = new Calculator(); 
// calculator.read();
// alert("Sum = " + calculator.sum()); 
// alert("Mul = " + calculator.mul());

// #5-----------------------

// function Accumulator(startingValue) {
//   this.startVallue = startingValue;
  
//   this.read = function() {
//     this.userNumber = prompt("Enter first number: ", 100);
//     this.value = parseInt(this.startVallue) + parseInt(this.userNumber);
//   }
// }

// let accumulator = new Accumulator(1); // initial value 1 accumulator.read(); 
// accumulator.read(); // adds the user-entered value 
// alert(accumulator.value); // shows the sum of these values

// #6-----------------------

