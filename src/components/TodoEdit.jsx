const TodoEdit = ({
  handleClose,
  editText,
  setEditText,
  handleSave,
}) => {
  const handleEditInput = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="edit-input-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="edit-task">
          Edit your task
        </label>

        <div className="flex-input">
          <input
            id="edit-task"
            type="text"
            placeholder="Enter a task..."
            value={editText}
            className="edit-input"
            onChange={handleEditInput}
          />

          <button
            type="submit"
            className="save-btn"
          >
            Save
          </button>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="close-btn"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default TodoEdit;