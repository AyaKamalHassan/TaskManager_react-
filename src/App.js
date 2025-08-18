import logo from './logo.svg';
import './App.css';
import ToDoList from './component/ToDoList';

function App() {
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
      <ToDoList/>
    </div>
  );
}

export default App;
