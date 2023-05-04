import { Card, CardContent, CardMedia, IconButton, CardActions, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import tileImage1 from "../../../assets/tile_img_1.png";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";

const Task = ({ task }) => {

  const [taskEditForm, setTaskEditForm] = useState(false);
  const [taskDeleteForm, setTaskDeleteForm] = useState(false);
  

  return (

      <Card sx={{ maxWidth: 345 }} className="task-edit-delete-button-section">

        <div className="section">
          <div className="task-container">

            <CardMedia component="img" alt="green iguana" height="140" image={tileImage1}  
            />
          
            <div class="task-go-status-container">
              <div className="task-go-button"> GO </div>
              <div className="task-status-box">{task.order_field} </div>
            </div>

          </div>
        

          <div className="task-content-container">

            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                  
                <div className="second-task-section">

                    {task.task_name}
             
                </div>

                <div className="task-task-edit-group">

                    <IconButton aria-label="edit" className="task-edit-button">

                        <EditIcon onClick={() => {setTaskEditForm(true)}} />
                        <EditForm task={task} editForm={taskEditForm} setEditForm={setTaskEditForm} />
                    
                    </IconButton>

                    <IconButton aria-label="delete" className="task-delete-button">

                          <DeleteIcon onClick={() => {setTaskDeleteForm(true)}} />
                          <DeleteForm task={task} deleteForm={taskDeleteForm} setDeleteForm={setTaskDeleteForm} />
                          
                    </IconButton> 

                </div> 


                <div className="third-task-section">
                  {task.task_description}
                </div>


                <div className="last-task-section">
                  
                  <div>{task.type} </div>
                  <div>{task.participant_number}</div>

                </div>

                </Typography>
              
            </CardContent>
          </div>
        
        </div>
        
      </Card>  

                
  );
};

export default Task;
