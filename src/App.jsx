import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoStatistics from "./components/TodoStatistics";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "I am a programmer", completed: false },
    { id: 2, text: "I am a developer", completed: true },
    { id: 3, text: "I am an engineer", completed: false }
  ]);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterActive, setFilterActive] = useState("all");

  const handleAddToDo = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please enter a task.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: trimmedInput,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
    setError("");
  };

  // Toggle todo completion
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Close error/edit modal
  const handleClose = () => {
    setError("");
    setIsEdit(false);
    setEditId(null);
    setEditText("");
  };

  // Delete todo items
  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );

    if (id === editId) {
      setIsEdit(false);
      setEditId(null);
      setEditText("");
    }
  };

  // Open edit modal
  const handleEdit = (todo) => {
    setIsEdit(true);
    setEditId(todo.id);
    setEditText(todo.text);
    setError("");
  };

  // save edited todo text
  const handleSave = () => {
    const trimmedEditText = editText.trim();

    if (!trimmedEditText) {
      setError("Please enter a task.");
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editId
          ? { ...todo, text: trimmedEditText }
          : todo
      )
    );

    setEditText("");
    setEditId(null);
    setIsEdit(false);
    setError("");
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Making Search filtering
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  // Doing Status filtering
  const finalTodos = filteredTodos.filter((todo) => {
    if (filterActive === "active") {
      return !todo.completed;
    }

    if (filterActive === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main>
        <div className="add-to-do-section">
          <TodoInput
            input={input}
            setInput={setInput}
            handleAddToDo={handleAddToDo}
          />
        </div>

        <div className="statistics-section">
          <TodoStatistics todos={todos} />
        </div>

        <div className="search-section">
          <TodoSearch
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
            filterActive={filterActive}
            setFilterActive={setFilterActive}
          />
        </div>

        {error && (
          <div className="error-popup">
            <div className="error-text">
              <h3>Something went wrong</h3>
              <p>{error}</p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="close-btn"
            >
              Close
            </button>
          </div>
        )}

        <div className="todo-item-section">
          <TodoList
            finalTodos={finalTodos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />

          {isEdit && (
            <div className="editing-show-box">
              <TodoEdit
                editText={editText}
                setEditText={setEditText}
                handleClose={handleClose}
                handleSave={handleSave}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;