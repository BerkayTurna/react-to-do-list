const AddToDoItem = ({
  addTask,
  newTask,
  handleInputChange,
  color,
  handleColorChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <input type="color" value={color} onChange={handleColorChange} />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};
export default AddToDoItem;
