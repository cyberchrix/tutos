// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasksRemaining = 0;

// Function to update the task count
function updateTaskCount() {
    taskCount.textContent = `Tasks remaining: ${tasksRemaining}`;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task element
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Complete button
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        tasksRemaining += li.classList.contains("completed") ? -1 : 1;
        updateTaskCount();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        if (!li.classList.contains("completed")) {
            tasksRemaining--;
        }
        updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input and update count
    taskInput.value = "";
    tasksRemaining++;
    updateTaskCount();
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});