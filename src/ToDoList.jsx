import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Walk the dog", "Go to the gym"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const selectedTask = updatedTasks[index];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = selectedTask;
      updatedTasks[index] = temp;
      // [updatedTasks[index], updatedTasks[index - 1]] = [
      //   updatedTasks[index - 1],
      //   updatedTasks[index],
      // ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      // const selectedTask = updatedTasks[index];
      // const temp = updatedTasks[index + 1];
      // updatedTasks[index + 1] = selectedTask;
      // updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }
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
