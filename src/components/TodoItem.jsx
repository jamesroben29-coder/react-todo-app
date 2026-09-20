import { Trash, SquarePen } from "lucide-react";

const TodoItem = ({ todo, handleDelete, handleEdit, handleToggle }) => {
  return (
    <div className="todo-item">
      <button type="button"
        className={`item-left ${todo.completed ? "completed" : ""}`}
        onClick={() => handleToggle(todo.id)}
        aria-pressed={todo.completed}
        aria-label={
          todo.completed
            ? `Mark "${todo.text}" as active`
            : `Mark "${todo.text}" as completed`
        }
      >
        <span
          className={`check ${todo.completed ? "completed" : ""}`}
          aria-hidden="true"
        >
          {todo.completed ? "✓" : ""}
        </span>

        <span className={`text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </button>

      <div className="item-right">
        <button type="button"
          className="edit-btn"
          onClick={() => handleEdit(todo)}
          aria-label={`Edit "${todo.text}"`}
        >
          <SquarePen size={18}
            color="var(--text)"
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>

        <button type="button"
          className="delete-btn"
          onClick={() => handleDelete(todo.id)}
          aria-label={`Delete "${todo.text}"`}
        >
          <Trash size={18}
            color="var(--danger)"
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;