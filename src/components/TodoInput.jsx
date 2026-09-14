
import { List, Plus } from 'lucide-react';


const TodoInput = ({ input, setInput, handleAddToDo }) => {

    const handleInput = (e) => {
        setInput(e.target.value);
    }

  return (
    <div className='todo-input-container'>
        <div className="input-wrapper">
            <List size={20} color="var(--secondary)" />
            <input type="text" placeholder='Enter a task...' 
            value={input}
            onChange={handleInput}
            className='todo-input'/>
        </div>
        <div>
            
            <button className='add-to-do-btn' onClick={handleAddToDo}>
                <Plus size={20} color="var(--text)" /> 
                Add Task
            </button>
        </div>
    </div>
  )
}

export default TodoInput;