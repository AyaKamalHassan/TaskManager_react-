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

import ToDo from './todo';


export default function ToDoList() {
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
<ToDo/>
<ToDo/>
        </CardContent>
   
      </Card>
    </Container>
  );
}
