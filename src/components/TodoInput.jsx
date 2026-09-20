import { List, Plus } from "lucide-react";

const TodoInput = ({ input, setInput, handleAddToDo }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddToDo();
  };

  return (
    <form className="todo-input-container" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <List size={20}
          color="var(--secondary)"
          aria-hidden="true"
        />

        <input  type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={handleInput}
          className="todo-input"
          aria-label="Enter a task"
        />
      </div>

      <button
        type="submit"
        className="add-to-do-btn"
      >
        <Plus size={20}
          color="var(--text)"
          aria-hidden="true"
        />
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;