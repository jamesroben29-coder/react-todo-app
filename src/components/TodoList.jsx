
import React from 'react'
import TodoItem from "../components/TodoItem.jsx";

const TodoList = ({ todos, setTodos,
      handleDelete, handleToggle,
      handleEdit, finalTodos }) => {
    
const todoData = finalTodos.map((todo) => {
      return (
            <TodoItem key={todo.id} todo={todo}
                handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />
      );
    });

  return (
    <>
        {finalTodos.length === 0 ? 
            (
              <div className='empty-data'>
                <h3>No Found Any Data!</h3>
              </div>
            ) 
            : 
            (
                todoData
            )
        }
    </>
  )
}

export default TodoList;