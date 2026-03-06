document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function addTask(taskText = taskInput.value.trim(), save = true) {

        if (taskText !== "") {

            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            removeBtn.onclick = function () {
                taskList.removeChild(li);

                let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks = storedTasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            taskInput.value = "";
        } else {
            alert("Please enter a task");
        }
    }

    addButton.addEventListener('click', function () {
        addTask();
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();

});