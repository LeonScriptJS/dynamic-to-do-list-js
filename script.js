document.addEventListener("DOMContentLoaded", function () {

    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add button to list item
        li.appendChild(removeBtn);

        // Add list item to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Button click event
    addButton.addEventListener("click", addTask);

    // Enter key event
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});

