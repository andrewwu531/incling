import "../../css/TasksPage.css";
import logo from "../../assets/incling_logo1.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddButton from "./components/AddButton.jsx";
import AddForm from "./components/AddForm.jsx";
import { IconButton, Add } from "@mui/material";
import { TasksList } from "./components";
import { useLocation } from 'react-router-dom';

const TasksPage = () => {


  const location = useLocation();
  const { from } = location.state;
  const [tileTasks , setTileTasks] = useState([]);
  const [addTaskForm, setAddTaskForm] = useState(false);

  console.log("pk" + from);
  console.log("tileTask" + JSON.stringify(tileTasks));
  console.log("YOU" + JSON.stringify(tileTasks));


  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get(`http://127.0.0.1:8000/inclingApp/tile${from}/tasks`);
      console.log("YOU" + result.data);
      setTileTasks(result.data);
    };
    fetchData();

  }, []); 


  return (

    <>
      <div>

        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>


        <div>
          <TasksList 
            filteredTileTasks={tileTasks}
          />
        </div>


        <div className="addButton"> 
          <IconButton  
                onClick={() => {setAddTaskForm(true);}} 
                aria-label="add">
                <AddButton />
          </IconButton>
          <AddForm tileId={from} addForm={addTaskForm} setAddForm={setAddTaskForm} />
        </div>
  

      </div>
      
    </>
  );
};

export default TasksPage;
