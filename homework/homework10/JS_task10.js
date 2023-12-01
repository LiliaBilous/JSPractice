const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const iconShowPassword = document.querySelector("#iconShowPassword");
const iconHidePassword = document.querySelector("#iconHidePassword");

iconShowPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    iconShowPassword.classList.remove("fa-eye");
    iconShowPassword.classList.add("fa-eye-slash");
  } else {
    iconShowPassword.classList.remove("fa-eye-slash");
    iconShowPassword.classList.add("fa-eye");
    passwordInput.setAttribute("type", "password");
  }
});
iconHidePassword.addEventListener("click", () => {
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.setAttribute("type", "text");
    iconHidePassword.classList.remove("fa-eye");
    iconHidePassword.classList.add("fa-eye-slash");
  } else {
    confirmPasswordInput.setAttribute("type", "password");
    iconHidePassword.classList.remove("fa-eye-slash");
    iconHidePassword.classList.add("fa-eye");
  }
});

const form = document.querySelector("form");
const checkbox = document.querySelector(".checkbox");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (passwordInput.value === confirmPasswordInput.value) {
    alert(`You are welcome`);
  } else {
    let alertMessage = document.createElement(`div`);
    alertMessage.className = "alert";
    alertMessage.innerHTML = "Потрібно ввести однакові значення";
    checkbox.before(alertMessage);
  }
});

// function togglePasword(input, icon) {
//   if(input.type === 'password') {
//     input.setAttribute('type', 'text');
//     icon.classList.remove('fa-eye');
//     icon.classList.add('fa-eye-slash');
//   } else {
//     icon.classList.remove('fa-eye-slash');
//     icon.classList.add('fa-eye');
//     input.setAttribute('type', 'password');
//   }
// }
