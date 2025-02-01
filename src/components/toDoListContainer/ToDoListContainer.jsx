import TodoItem from "./../toDoItem/TodoItem";
import "./style.css";

const ToDoListContainer = ({ tasks, removeTask, moveTaskUp, moveTaskDown }) => {
  return (
    <div className="container">
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
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

export default ToDoListContainer;
