const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const icons = document.querySelectorAll(".fas");

for(let icon of icons) {
    icon.addEventListener("click", () => {
        
        if(passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add('fa-eye-slash');
        }
        //  else {
        //     passwordInput.type = "password";
        //     icon.classList.remove('fa-eye-slash');
        //     icon.classList.add('fa-eye');
        // }      
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if(passwordInput === confirmPasswordInput) {
    console.log(`You are welcome`);
  } else {
    console.log(`Потрібно ввести однакові значення`);
  }
});
