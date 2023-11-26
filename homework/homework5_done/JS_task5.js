//функція `createNewUser()` з попереднього завдання
function createNewUser() {
  let firstName = prompt("What is your first name?", "name");
  let lastName = prompt("What is your last name?", "lastname");
  let birthday = prompt("Enter your birthady date like DD.MM.YYYY:");

  let newUser = {
    getFirstName() {
      return firstName;
    },
    getLastName() {
      return lastName;
    },
    getBirthday() {
      return birthday;
    },
    getAge() {
      let now = new Date();
      let birthDate = new Date(birthday);
      let age = now.getFullYear() - birthDate.getFullYear();
      return age;
    },
    getLogin() {
      let login = firstName[0].toLowerCase() + lastName.toLowerCase();
      return login;
    },
    getPassword() {
      let firstLetterName = firstName[0].toUpperCase();
      let year = new Date(birthday).getFullYear().toString();
      let password = firstLetterName + lastName.toLowerCase() + year;
      return password;
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
console.log(`Login: ${user.getLogin()}`);
console.log(`Age: ${user.getAge()}`);
console.log(`Password: ${user.getPassword()}`);
