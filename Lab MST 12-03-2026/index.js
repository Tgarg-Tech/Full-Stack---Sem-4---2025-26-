let tasks = [];

function addTask() {
  let name = document.getElementById('taskName').value;
  let priority = document.getElementById('priority').value;

  if (name === '') {
    alert('Please enter a task name!');
    return;
  }

  let task = { name: name, priority: priority, status: 'Pending' };
  tasks.push(task);

  document.getElementById('taskName').value = '';
  showTasks('All');
}

function showTasks(filter) {
  let list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    if (filter === 'Completed' && task.status !== 'Completed') return;
    if (filter === 'Pending' && task.status !== 'Pending') return;

    let div = document.createElement('div');
    div.textContent = task.name + ' [' + task.priority + '] - ' + task.status;

    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function () {
      task.status = 'Completed';
      showTasks(filter);
    };

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
      tasks.splice(index, 1);
      showTasks(filter);
    };

    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    list.appendChild(div);
  });
}
