document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText !== "") {

            // create list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            // remove task when button is clicked
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // append button to li
            li.appendChild(removeBtn);

            // append li to task list
            taskList.appendChild(li);

            // clear input
            taskInput.value = "";

        } else {
            alert("Please enter a task");
        }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});