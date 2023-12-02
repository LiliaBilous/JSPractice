const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const passwordIcon = document.querySelector("#passwordIcon");
const confirmPasswordIcon = document.querySelector("#confirmPasswordIcon");

passwordIcon.addEventListener("click", togglePasword);
confirmPasswordIcon.addEventListener("click", togglePasword);

function togglePasword(event) {
  if(event.target.previousSibling.type === 'password') {
    event.target.classList.remove('fa-eye');
    event.target.classList.add('fa-eye-slash');
    event.target.previousSibling.setAttribute('type', 'text');
  } else {
    event.target.classList.remove('fa-eye-slash');
    event.target.classList.add('fa-eye');
    event.target.previousSibling.setAttribute('type', 'password');
  }
}

const form = document.querySelector("form");
const checkbox = document.querySelector(".checkbox");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let alertMessage = document.querySelector('.alert');
  if (passwordInput.value === '' || confirmPasswordInput.value === '') {
    alertMessage.innerHTML = "Потрібно ввести значення";
  } else if (passwordInput.value === confirmPasswordInput.value) {
    let oldAlert = document.querySelector('.alert');
    if (oldAlert) {
      oldAlert.remove();
    }
    alert(`You are welcome`);
  } else {
    alertMessage.innerHTML = "Потрібно ввести однакові значення";
  }
  
});
