const student = {};
student.name = prompt("What is your name?", "Ron");
student["last name"] = prompt("What is your last name?", "Weasley");
student.tabel = {};
while(true) {
    const subject = prompt("Enter your subject or click Cancel: ", "Potion");
    
    if (subject === null) {
        break;
    }

    const grade = +prompt(`What is your grade with ${subject}`, 5);

    if (!isNaN(grade)) {
        student.tabel[subject] = grade;
      } else {
        alert("Enter your grade as a number, please.");
      }
} 

console.log(student);

let subjectSum = 0;
let subjectCount = 0;
let badGradesCount = 0;

for(let garades in student.tabel) {
    subjectSum += student.tabel[garades];
    subjectCount++;
    if (student.tabel[garades] < 4) {
        badGradesCount++;
    }
    
}

let averageScore = subjectSum / subjectCount;
console.log(averageScore);

if (averageScore > 7) {
    alert(`Студенту призначенна стипендія`);
}

if (badGradesCount === 0) {
    alert(`Студент переведений на наступний курс`);
}

// {Potion: 5, Spells: 4, DarkArts: 5, MagicCreature: 6}