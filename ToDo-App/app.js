"use strict";
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = todoInput.nextElementSibling;
const todoList = document.querySelector(".todo-list");
//functions
const clearInput = () => {
  todoInput.value = "";
};
const addTodo = () => {
  //New div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // New List item
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.append(newTodo);
  // Completed task button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.append(completedButton);
  // Delete task button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.append(trashButton);
  // Add to Unordered List
  todoList.append(todoDiv);
  clearInput();
};

//eventListeners
todoButton.addEventListener("click", addTodo);
todo;
