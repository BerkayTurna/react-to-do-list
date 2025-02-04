const AddToDoItem = ({ addTask, newTask, handleInputChange }) => {
  return (
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
  );
};

export default AddToDoItem;
