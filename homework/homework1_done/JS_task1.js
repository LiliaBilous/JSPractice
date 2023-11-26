let user; 
do {
    user = prompt('What is your name?', '')
} while (!user);

let age;
do {
    age = Number(prompt("How old are you?"));
} while (!age) 
    
if (age < 18) {
    alert('You can not use this site!');
} else if (age >= 18 && age <= 22) {
    let answer = confirm('Are you sure you want to continue?');
    if (answer) {
        alert(`Welcome, ${user}`);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert(`Welcome, ${user}`);
}  