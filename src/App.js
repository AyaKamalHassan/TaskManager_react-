import logo from './logo.svg';
import './App.css';
import ToDoList from './component/ToDoList';
import { TodoContext } from './contexts/todoContext';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';









const initialTodos=[
  
  {
    id:uuidv4(),
    title:"Read a Book",
    details:"the book name zekola",
    isCompleted:false
  },
    {
    id:uuidv4(),
    title:"Read a Book",
    details:"the book name zekola",
    isCompleted:false
  },
    {
    id:uuidv4(),
    title:"Read a Book",
    details:"the book name zekola",
    isCompleted:false
  },
]
function App() {
const [todos,setTodos]=useState(initialTodos)



  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4e342e",
        height:"100vh" 
      }}
    >
      {/* <h1>heloooo</h1> */}
      <TodoContext.Provider value={{todos:todos ,setTodos:setTodos}}>
      <ToDoList/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
