async function fetchUser() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
}

async function renderList() {
    const users = await fetchUser();
    console.log(users);
    const userList = document.querySelector('.user-list');
    for(const user of users) {
        const userItem = document.createElement('li');
        userItem.classList.add = 'user-list-item';
        userItem.innerHTML = user.name;
        userList.appendChild(userItem);
    }
}


renderList()