import { Box, Grid } from "@mui/material";
import Task from "./Task";

const TasksList = ({ filteredTileTasks }) => {

console.log("HERE" + filteredTileTasks);
console.log("HERE" + JSON.stringify(filteredTileTasks));

  return (
    filteredTileTasks !== null ? (

    <div className="task-section">
      <Box sx={{ flexGrow: 1, maxWidth: "80%" }}>
        <Grid container spacing={{ xs: 6, md: 4 }} direction="row">
          {filteredTileTasks.map((task, index) => (
            <Grid item xs={6} sm={6} md={4} key={index} direction="row">
              <div className="tile-card">
                <Task task={task} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>

    ) : null
  );
};

export default TasksList;
