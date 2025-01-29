import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Walk the dog", "Go to the gym"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function removeTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="remove-button"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
