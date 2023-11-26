function renderList(arr) {
    let list = document.createElement('ul');
    document.body.appendChild(list);
    arr.map((elem) => {
        if (typeof elem == "object") {
          listCreator(elem, list);
          return;
        }
        let listItem = document.createElement('li');
        listItem.innerText = elem;
        list.appendChild(listItem);
    })  
}

function timerCounter() {
    let seconds = 10;
    const timerHolder = document.createElement("div");
    document.body.appendChild(timerHolder);

    function updateTimer() {
        if (seconds > 0) {
            timerHolder.innerText = `${seconds} seconds left`;
            seconds--;
        } else {
            clearInterval(timerInterval);
        }
    }
    
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}
timerCounter();
setTimeout(() => (document.body.style.display = "none"), 10000);

renderList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'])