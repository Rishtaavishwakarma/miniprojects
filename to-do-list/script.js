function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
      alert('Please enter a task.');
      return;
    }

    const list = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      list.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = '';
  }