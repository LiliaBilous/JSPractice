const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    li.innerText = input.value;
    list.appendChild(li);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    li.appendChild(deleteBtn);
    input.value = '';
    
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    });
});