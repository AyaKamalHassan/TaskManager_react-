import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';       
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

import { useContext,useState } from 'react';
import { TodoContext } from '../contexts/todoContext';

// delete dialog 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';






export default function ToDo({todo,handleCheck}) {

const [showDeleteDialog,setShowDeleteDialog]=useState(false);
const [showUpdateDialog,setShowUpdateDialog]=useState(false);
const [updatedTodo,setUpdatedTodo]=useState({
  title:todo.title,details:todo.details
})

const {todos,setTodos}=useContext(TodoContext);
//handler===========
function handleDeleteClick(){
  setShowDeleteDialog(true);
}
function handleUpdateClick(){
  setShowUpdateDialog(true);
}

function handleClose(){
  setShowDeleteDialog(false);
}

function handleUpdateClose(){
setShowUpdateDialog(false)
}

function handleDeleteConfirm(){
  const updatedTodos=todos.filter((t)=>{
    if(t.id==todo.id)
      return false;
    else
      return true;
  })
  setTodos(updatedTodos)
}
function handleUpdateConfirm(e)
{
    e.preventDefault();
  const updatedTodos=todos.map((t)=>{
    if(t.id== todo.id)
    {
      return {...t,title:updatedTodo.title, details:updatedTodo.details}
    }
    else{
      return t;
    }
  })
  setTodos(updatedTodos);
  setShowUpdateDialog(false);
  
}


function  handleCheckClick(id)
{
  // handleCheck(todo.id);
  const updatedTodos=todos.map((t)=>{
  if(t.id==todo.id)
{
  if(t.isCompleted==false)
  {
  t.isCompleted=true;
  }
  else{
    t.isCompleted=false;
  }
}

  return t;})
  setTodos(updatedTodos);

}

  return (
    <>
{/* Delete Modal  */}

   <Dialog
   onClose={handleClose}
        open={showDeleteDialog}
        slots={{
          // transition: Transition,
        }}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are You Sure For Deleting This Task?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If You Delete It You Can't Return It After Deletion
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
{/*=== Delete Modal === */}


{/* Update Dialog  */}

 <Dialog open={showUpdateDialog} onClose={handleUpdateClose}>
        <DialogTitle>Update Task !</DialogTitle>
        <DialogContent>
          <form  id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Title Of Task "
              fullWidth
              variant="standard"
              value={updatedTodo.title}
              onChange={(e)=>{
                setUpdatedTodo({...updatedTodo,title:e.target.value})
              }}
            />

              <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="details Of Task "
              fullWidth
              variant="standard"
               value={updatedTodo.details}
              onChange={(e)=>{
                setUpdatedTodo({...updatedTodo,details:e.target.value})
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Cancel</Button>
          <Button type="submit" form="subscription-form" onClick={handleUpdateConfirm}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

{/*===== Update Dialog ==== */}



    <Card className='todoCard'
      sx={{
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
        mt: 1,
        background: "#bf360c",
      }}
    >
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Task Title */}
            <Grid item>
              <Typography
                variant="h5"
                sx={{ color: "white", textAlign: "left" }}
              >
                {todo.title}
              </Typography>

              <Typography
                variant="h7"
                sx={{ color: "white", textAlign: "left" }}
              >
               {todo.details}
              </Typography>
            </Grid>

            {/* Action Buttons */}
            <Grid item>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  aria-label="done"
                  onClick={handleCheckClick }
                  sx={{
                    color:todo.isCompleted? "white": "#8bc34a",
                    border: "3px solid #8bc34a",
                    backgroundColor:todo.isCompleted?"#8bc34a": "white",
                  }}
                >
                  <CheckIcon />
                </IconButton>

                <IconButton
                  aria-label="edit"
                  onClick={handleUpdateClick}
                  sx={{
                    color: "#1796aa",
                    border: "3px solid #1796aa",
                    backgroundColor: "white",
                  }}
                >
                  <ModeEditOutlineOutlinedIcon/>
                </IconButton>

                <IconButton
                  aria-label="another"
                  sx={{
                    color: "#b71c1c",
                    border: "3px solid #b71c1c",
                    backgroundColor: "white",
                  }}
                  onClick={handleDeleteClick}
                >
                  <DeleteIcon/>
                  
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
    </>
  );
}
