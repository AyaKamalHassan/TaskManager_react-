import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';       
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

export default function ToDo() {
  return (
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
                First Task
              </Typography>

              <Typography
                variant="h7"
                sx={{ color: "white", textAlign: "left" }}
              >
               details of First Task
              </Typography>
            </Grid>

            {/* Action Buttons */}
            <Grid item>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  aria-label="done"
                  sx={{
                    color: "#8bc34a",
                    border: "3px solid #8bc34a",
                    backgroundColor: "white",
                  }}
                >
                  <CheckIcon />
                </IconButton>

                <IconButton
                  aria-label="edit"
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
                >
                  <DeleteIcon/>
                  
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
