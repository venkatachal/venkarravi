const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", taskActions);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <span class="actions"><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></span>`;
  taskList.appendChild(li);

  taskInput.value = "";
}

function taskActions(e) {
  const target = e.target;
  const parent = target.parentElement.parentElement;
  const textElement = parent.firstChild;

  if (target.classList.contains("edit-btn")) {
    const newText = prompt("Edit task:", textElement.textContent);
    if (newText !== null && newText !== "") {
      textElement.textContent = newText;
    }
  } else if (target.classList.contains("delete-btn")) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      parent.remove();
    }
  } else if (textElement.classList.contains("completed")) {
    textElement.classList.remove("completed");
  } else {
    textElement.classList.add("completed");
  }
}
