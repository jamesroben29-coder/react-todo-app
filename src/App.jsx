import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoStatistics from "./components/TodoStatistics";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

import "./App.css";

function App(){

  const [ todos, setTodos ] = useState([
    {id: 1, text: "I am a programmer", completed: false},
    {id: 2, text: "I am a developer", completed: true},
    {id: 3, text: "I am a engineer", completed: false}
  ]);

  const [ input, setInput ] = useState("");
  const [ error , setError ] = useState(false);

  const [ isEdit, setIsEdit ] = useState(false);
  const [ editId, setEditId ] = useState(null);
  const [ editText, setEditText ] = useState("");
  const [ searchText , setSearchText ] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  

    const handleAddToDo = () => {
        if(input.trim() === ""){
            setError("You need to fill data!");
            return;
        }

        const newToDo = {
            id : Date.now(),
            text : input,
            completed : false
        }

        setTodos([...todos, newToDo ]);
        setInput("");
        setError("");
    }

    const handleToggle = (id) => {
        const togggleData =  todos.map((todo) => todo.id === id ? 
        { ...todo, completed : !todo.completed}
        : todo );
        setTodos(togggleData);
    }

    const handleClose = () => {
        setError(false);
        setIsEdit(false);
    }

    const handleDelete = (id) => {
            setTodos(todos.filter((item) => item.id !== id)); 
            if (id === editId) {
                setIsEdit(false);
                setEditId(null);
                setEditText("");
            }
    }

    const handleEdit = (todo) => {
            setIsEdit(true);
            setEditId(todo.id);
            setEditText(todo.text);
    }

    const handleSave = () => {
        const editData = todos.map(todo => {
            if(todo.id === editId){
                return { ...todo, text: editText};
            }
            return todo;
        });
        setTodos(editData);
        setEditText("");
        setIsEdit(false);
    }

    const handleSearch = (text) => {
        setSearchText(text); 
    }

    const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase()));

    const finalTodos =
        filterActive === "active" ? filteredTodos.filter((todo) => !todo.completed)
            : filterActive === "completed" ? filteredTodos.filter((todo) => todo.completed)
             : filteredTodos;
    

    const handleFilterActive = () => {
        setFilterActive("active");
    };

    
    const handleFilterAll = () => {
        setFilterActive("all");
    };

  
    const handleFilterCompleted = () => {
        setFilterActive("completed");
    };



  return(
    <div className="app">
        <header >
            <Header/>
        </header>

         <h3>Hello</h3>

        <main>

          <div className="add-to-do-section">
              <TodoInput handleAddToDo={handleAddToDo} error={error} setError={setError} input={input} setInput={setInput}/>
          </div>

          <div className="statistics-section">
              <TodoStatistics todos={todos}/>
          </div>

          <div className="search-section">
              <TodoSearch handleSearch={handleSearch}
                searchText={searchText} setSearchText={setSearchText}
                handleFilterActive={handleFilterActive} filterActive={filterActive}
                handleFilterAll={handleFilterAll} handleFilterCompleted={handleFilterCompleted}/>
          </div>

          {error && 
                <div className="error-popup">
                    <div className="error-text">
                        <h3>There is not any data now,</h3>
                        <p>Please fill something you like!</p>
                    </div>
                    <button onClick={handleClose} className="close-btn">Close</button>
                </div>
            }

          <div className="todo-item-section">
              <TodoList  todos={todos}
                setTodos={setTodos} handleToggle={handleToggle}
                filteredTodos={filteredTodos} finalTodos={finalTodos}
                handleDelete={handleDelete} handleEdit={handleEdit}/>
              
              {isEdit && 
                    <div className="editing-show-box">
                        <TodoEdit editText={editText} setEditText={setEditText} handleClose={handleClose} handleSave={handleSave}/>
                    </div>
              }
          </div>

        </main>

    </div>
  );
}

export default App;