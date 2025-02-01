import React from "react";

export const Todo = ({ task, index, removeTask, moveTaskUp, moveTaskDown }) => {
  return (
    <li>
      <span className="text">{task}</span>
      <button className="remove-button" onClick={() => removeTask(index)}>
        Remove
      </button>
      <button className="move-button" onClick={() => moveTaskUp(index)}>
        Up
      </button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>
        Down
      </button>
    </li>
  );
};
