
const TodoEdit = ({handleClose ,editText ,setEditText,handleSave }) => {

  const handleEditInput = (e) =>{
      setEditText(e.target.value);
  }

  return (
    <div className='edit-input-box'>
        <small>Eidt your task here...</small>
        <div className='flex-input'>
          <input type="text" placeholder='Enter a task...' value={editText}
           className='edit-input' onChange={handleEditInput}/>
          <button onClick={handleSave} className='save-btn'>Save</button>
        </div>

        <button onClick={handleClose} className="close-btn">Close</button>
    </div>
  )
}

export default TodoEdit;