import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState, useContext,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDo from './todo';
import { TodoContext } from '../contexts/todoContext';

export default function ToDoList() {
  const { todos, setTodos } = useContext(TodoContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayTodosType,setDisplayTodosType]=useState("all");



    //filteration array 
const completedTodos=todos.filter((t)=>{
  return t.isCompleted;
})
  //filteration array 
const notCompletedTodos=todos.filter((t)=>{
  return !t.isCompleted;
})
let todosToBeRendered=todos;
if(displayTodosType=="complete")
{
  todosToBeRendered=completedTodos;
}
else if(displayTodosType=="uncomplete")
{
  todosToBeRendered=notCompletedTodos;
}

  const todosJsx = todosToBeRendered.map((t) => (
    <ToDo key={t.id} todo={t} />
  ));

  function handleAddClick() {
    if (!titleInput.trim()) return; 
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false
    };
    const updatedTodos=[...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos",JSON.stringify(updatedTodos));
    setTitleInput("");
  }

  function chanageDisplayType(e){
    setDisplayTodosType(e.target.value);
  }

  useEffect(()=>{
    console.log("use effect function");
  const storageTodos=JSON.parse(localStorage.getItem("todos"));
setTodos(storageTodos);
  },[]);

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }} style={{maxHeight:"90vh",
        overflow:"scroll"
      }}>
        <CardContent>
          <Typography variant="h2" gutterBottom sx={{ color: 'text.secondary' }}>
            My Tasks
          </Typography>
          <Divider />

          <ToggleButtonGroup
            style={{ marginTop: "20px" }}
            color="primary"
            exclusive
            aria-label="filter"
            value={displayTodosType}
            onChange={chanageDisplayType}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="complete">Complete</ToggleButton>
            <ToggleButton value="uncomplete">Uncomplete</ToggleButton>
          </ToggleButtonGroup>

          {/* قائمة التودو */}
          {todosJsx}

          {/* input + button */}
          <Grid container spacing={2} sx={{ mt: 2, ml: 0 }}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="New Task"
                variant="outlined"
                size="small"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleAddClick}
                disabled={titleInput.length==0}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
