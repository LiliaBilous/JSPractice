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
        userItem.classList.add('user-list-item');
        userItem.innerHTML = user.name;
        userList.appendChild(userItem);
    }
}

function filterUsers(e) {
    const usersListItems = document.querySelectorAll('.user-list-item');
    const inputValue = e.target.value.toLowerCase();
    
    for (const user of usersListItems) {
        const userName = user.innerHTML.toLowerCase();
        if(!userName.includes(inputValue)) {
            user.classList.add('hidden');
        } else {
            user.classList.remove('hidden');
        }
    }
    if(inputValue === 0) {
        usersListItems.forEach((item) => {
            item.classList.remove('hidden');
        });
        return;
    }
}

renderList();

document.querySelector('.input').addEventListener('keyup', filterUsers)
