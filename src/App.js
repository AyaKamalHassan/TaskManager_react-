import './App.css';
import ToDoList from './component/ToDoList';

import { TodoContext } from './contexts/todoContext';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const initialTodos = [
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "the book name zekola",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "Go Shopping",
    details: "buy groceries",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "Practice Coding",
    details: "solve 2 problems",
    isCompleted: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4e342e",
        height: "100vh"
      }}
    >
      <TodoContext.Provider value={{ todos, setTodos }}>
        <ToDoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
