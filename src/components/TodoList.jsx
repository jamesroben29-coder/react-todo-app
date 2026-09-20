import TodoItem from "./TodoItem.jsx";

const TodoList = ({
  handleDelete,
  handleToggle,
  handleEdit,
  finalTodos,
}) => {
  if (finalTodos.length === 0) {
    return (
      <div className="empty-data">
        <h3>No tasks found!</h3>
        <p>Try adding a new task or changing your filter.</p>
      </div>
    );
  }

  return (
    <>
      {finalTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
        />
      ))}
    </>
  );
};

export default TodoList;