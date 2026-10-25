/* ==========================================================
   task-manager.js
   Part 1: Weekly Task Goal Calculator
   Part 2: Task Manager (tasks stored as an array of objects)
   ========================================================== */

/* ---------- Weekly Task Goal Calculator ---------- */

// Calculates a user's total weekly task goal based on their daily goal and bonus tasks.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly goal is based on 5 workdays per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to the weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Build the output message
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    // Display the result inside the goal-message paragraph
    document.getElementById("goal-message").innerHTML = output;
}

// Run weeklyGoal() when the user clicks the goal-btn button
document.getElementById("goal-btn").addEventListener("click", function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

/* ---------- Task Manager ---------- */

// Array of task objects. Each task looks like:
// { id: 1, name: "Finish JavaScript project", priority: "High", isImportant: true, isCompleted: false }
let tasks = [];

// Used to give every task a unique id
let nextId = 1;

// Left-border colors that show each priority level
const PRIORITY_COLORS = {
    High: "#fd7e14",   // orange
    Medium: "#ffc107", // yellow
    Low: "#198754"     // green
};

// Grab the elements we need
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskImportantBox = document.getElementById("task-important");
const taskListDiv = document.getElementById("task-list");
const deleteListBtn = document.getElementById("delete-list");

// Create the unordered list, give it an ID, and add it to the task-list div
const taskUl = document.createElement("ul");
taskUl.id = "user-tasks";
taskListDiv.appendChild(taskUl);

// Log the full task list as JSON (called after every add, update, or delete)
function logTasks() {
    console.log(JSON.stringify(tasks));
}

// Add a new task object to the array, then redraw the list
function addTask(name, priority, isImportant) {
    const task = {
        id: nextId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };
    tasks.push(task);
    renderTasks();
    logTasks();
}

// Mark a task complete (or undo it) by flipping isCompleted
function completeTask(id) {
    const task = tasks.find(function (t) { return t.id === id; });
    if (!task) { return; }
    task.isCompleted = !task.isCompleted;
    renderTasks();
    logTasks();
}

// Delete one task by id
function deleteTask(id) {
    tasks = tasks.filter(function (t) { return t.id !== id; });
    renderTasks();
    logTasks();
}

// Delete the entire task list
function deleteList() {
    tasks = [];
    renderTasks();
    logTasks();
}

// Build one <li> for a task using DOM nodes and apply its styles
function createTaskItem(task) {
    const li = document.createElement("li");

    // Priority styling: colored left border
    li.style.borderLeft = "6px solid " + PRIORITY_COLORS[task.priority];

    // Important tasks are highlighted in red
    if (task.isImportant) {
        li.style.backgroundColor = "#ffe5e5";
        li.style.color = "#c1121f";
        li.style.fontWeight = "bold";
    }

    // Checkbox to mark the task complete
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    checkbox.className = "form-check-input";
    checkbox.setAttribute("aria-label", "Mark " + task.name + " complete");
    checkbox.addEventListener("change", function () {
        completeTask(task.id);
    });

    // Task name and priority label
    const text = document.createElement("span");
    text.appendChild(document.createTextNode(task.name + " (" + task.priority + ")"));

    // Completed tasks get a strikethrough
    if (task.isCompleted) {
        text.style.textDecoration = "line-through";
        text.style.opacity = "0.6";
    }

    // Delete button for this one task
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-sm btn-outline-danger";
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.addEventListener("click", function () {
        deleteTask(task.id);
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    return li;
}

// Redraw every task inside the list
function renderTasks() {
    taskUl.innerHTML = "";

    if (tasks.length === 0) {
        const empty = document.createElement("li");
        empty.className = "task-empty";
        empty.appendChild(document.createTextNode("No tasks yet. Add one above."));
        taskUl.appendChild(empty);
        return;
    }

    tasks.forEach(function (task) {
        taskUl.appendChild(createTaskItem(task));
    });
}

// Add a task when the form is submitted (button click or Enter key)
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = taskNameInput.value.trim();

    // Ignore empty input
    if (name === "") {
        return;
    }

    addTask(name, taskPrioritySelect.value, taskImportantBox.checked);

    // Reset the form and put the cursor back in the name field
    taskForm.reset();
    taskNameInput.focus();
});

// Delete the whole list
deleteListBtn.addEventListener("click", deleteList);

// Show the empty-state message on page load
renderTasks();