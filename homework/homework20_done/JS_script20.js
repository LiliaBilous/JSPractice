function sprintPanning(developerSpeed, backlog, deadline) {
    // Розрахунок загальної кількості робочих днів до дедлайну
    const currentDate = new Date(); 
    console.log(`Today is: ${currentDate}`)
    const totalWorkingDays = workingDaysUntilDate(currentDate, deadline);
    
    function workingDaysUntilDate(currentDate, deadline) {
        let workingDaysLeft = 0;
        while (currentDate < deadline) {
            if (currentDate.getDay()>=1 && currentDate.getDay()<=5) {
                workingDaysLeft++;
            } 
            currentDate.setDate(currentDate.getDate()+1);
        }
        console.log(`workingDaysLeft: ${workingDaysLeft}`);
        return workingDaysLeft;
    };
    // Розрахунок загальної кількості store поінтів, які потрібно виконати
    const totalStorePoints = backlog.reduce((acc, task) => acc + task, 0);
    console.log(`totalStorePoints: ${totalStorePoints}`);
    // Розрахунок загальної швидкості команди
    const totalSpeed = developerSpeed.reduce((acc, speed) => acc + speed, 0);
    console.log(`totalSpeed: ${totalSpeed}`);
    const donePoints = totalSpeed*totalWorkingDays;
    
    if (donePoints > totalStorePoints) {
        console.log(`Усі завдання будуть успішно виконані за ${totalWorkingDays} днів до настання дедлайну!`);
    } else {
        console.log(`Команді розробників доведеться витратити додатково ${Math.ceil((totalStorePoints - donePoints) / totalSpeed * 8)} годин після дедлайну, щоб виконати всі завдання в беклозі.`);
    }
}

const developerSpeed = [4, 3, 2];
const backlog = [12, 8, 10];
const deadline = new Date("2023-10-19");
sprintPanning(developerSpeed, backlog, deadline);
