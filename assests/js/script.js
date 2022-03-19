window.document.querySelector("button");

var btn = window.document.querySelector("button");
console.dir(btn);

document.querySelector('.btn')

document.querySelector("button").textContent;

document.querySelector("#save-task");

var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {
    alert("button clicked");
});

document.createElement("li");

var taskItemEl = document.createElement("li");

var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function() { 
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

buttonEl.addEventListener("click", createTaskHandler);