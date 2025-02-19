// app.js
let todoList = [];

function addTodo() {
    const input = document.getElementById('newTodo');
    if (input.value) {
        todoList.push(input.value);
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todoList.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeTodo(index);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodos();
}

// Initialize Telegram Web App
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

// You can send data back to Telegram like this:
// window.Telegram.WebApp.sendData(JSON.stringify(todoList));