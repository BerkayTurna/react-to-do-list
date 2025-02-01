import React, { useState } from "react";
import { Header } from "./components/shared/header/Header";
import { AddToDo } from "./components/app/AddToDo";
import { ToDoContainer } from "./components/app/ToDoContainer";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Walk the dog", "Go to the gym"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
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
  };

  const moveTaskDown = (index) => {
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
  };
  return (
    <div className="to-do-list">
      <Header />
      <AddToDo
        addTask={addTask}
        handleInputChange={handleInputChange}
        newTask={newTask}
      />
      <ToDoContainer
        tasks={tasks}
        removeTask={removeTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </div>
  );
};
export default ToDoList;
