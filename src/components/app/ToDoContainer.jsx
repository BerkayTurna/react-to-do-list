import React from "react";
import { Todo } from "./Todo";

export const ToDoContainer = ({
  tasks,
  removeTask,
  moveTaskUp,
  moveTaskDown,
}) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Todo
            key={index}
            index={index}
            task={task}
            removeTask={removeTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ul>
    </div>
  );
};
