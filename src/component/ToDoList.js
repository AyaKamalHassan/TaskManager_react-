import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';    
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';


import ToDo from './todo';
//others
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

export default function ToDoList() {
const {todos,setTodos} =useContext(TodoContext);
 

const [titleInput,setTitleInput]=useState("");

  const todosJsx=todos.map((t)=>{
    return(
      <ToDo key={t.id} todo={t} />
    )
    
  })
//   function handleCheckClick(todoId){
    
// const updatedTodos=todos.map((t)=>{
//   if(t.id==todoId)
// {
//   if(t.isCompleted==false)
//   {
//   t.isCompleted=true;
//   }
//   else{
//     t.isCompleted=false;
//   }
// }

//   return t;
// })




//   setTodos(updatedTodos);
//   }




  function handleAddClick(){
    const newTodo={
      id:uuidv4(),
      title:titleInput,
      details:"",
      isCompleted:false
    }
    setTodos([...todos,newTodo]);
    setTitleInput("")

  }
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom sx={{ color: 'text.secondary' }}>
            My Tasks
          </Typography>
          <Divider/>

          <ToggleButtonGroup
          style={{marginTop:"20px"}}
      color="primary"
    //   value={alignment}
      exclusive
    //   onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">All</ToggleButton>
      <ToggleButton value="android">Complete</ToggleButton>
      <ToggleButton value="ios">UnComplete</ToggleButton>
    </ToggleButtonGroup>

{/* todocard child */}
{/* <ToDo/> */}
{todosJsx}
{/* ////////////////////////////////////////////////////////// */}

{/* add button and input */}
<Grid container spacing={2} sx={{ mt: 2 ,ml:10}} >
  {/* Input - 8  */}
  <Grid item xs={8}>
    <TextField
      fullWidth
      id="outlined-basic"
      label="New Task"
      variant="outlined"
      size="small"
      // style={{ width: '100%', height: '100%' }}
      value={titleInput}
      onChange={(e)=>{
        setTitleInput(e.target.value);
      }}
      
    />
  </Grid>

  {/* Button - 4  */}
  <Grid item xs={4}>
    <Button 
      variant="contained" 
      size="large"
      style={{ width: '100%', height: '100%' }}
      onClick={()=>{
        handleAddClick();
      }}
    >
      Add Task
    </Button>
  </Grid>
</Grid>
{/* ==add button and input == */}


        </CardContent>
   
      </Card>
    </Container>
  );
}