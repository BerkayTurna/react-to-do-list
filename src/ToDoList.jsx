import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {}

  function addTask() {}

  function removeTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <>
      <h1>To-Do List</h1>
    </>
  );
}
export default ToDoList;
