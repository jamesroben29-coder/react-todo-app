
import { Trash, SquarePen } from 'lucide-react';
import React from 'react'

const TodoItem = ({todo, handleDelete , handleEdit, handleToggle}) => {
    
  return (
    <div className='todo-item'>
        <div className={`item-left ${todo.completed ? "completed" : ""}`} onClick={() => handleToggle(todo.id)}>
           <div className={`check ${todo.completed ? "completed": ""} `}>{todo.completed ? "✓" : ""}</div>
           <p className={`text ${todo.completed ? "completed" : ""}`}>{todo.text}</p>
        </div>
        <div className='item-right'>
            <SquarePen  color="var(--text)" strokeWidth={2} className='edit-btn' onClick={() => handleEdit(todo)}/>
            <Trash  color="var(--danger)" strokeWidth={2} className='delete-btn' onClick={() => handleDelete(todo.id)}/>
        </div>

    </div>
  )
}

export default TodoItem;