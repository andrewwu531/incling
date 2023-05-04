import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "../../../css/Home/AddForm.css";

const AddForm = ({ tileId, addForm, setAddForm }) => {


  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [orderField, setOrderField] = useState("");
  const [type, setType] = useState("");

  const orderFieldChoices = ["HIGH", "MEDIUM", "LOW"]
  const typeChoices = ["SURVEY", "DISCUSSION", "DIARY", "OTHERS"]


  // console.log("ABC" + tileName);
  // console.log("DEF" + launchDate);
  // console.log("HIJ" + status);


  const handleAddFormSelectEnter = async (event) => {
   
    let data = JSON.stringify({
      tile: tileId,
      task_name: taskName,
      task_description: taskDescription,
      participant_number: "0",
      order_field: orderField,
      type: type,
    });

    event.preventDefault();

    try {

      axios.post(
        `http://127.0.0.1:8000/inclingApp/tasks/`,
        JSON.parse(data)
      );
      // console.log("HIHIHI" + response.data);
      } catch (error) {
      // console.log("ERROR" + error);

    }

    setAddForm(false);

    window.location.reload();

  };


  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleOrderFieldChange = (event) => {
    setOrderField(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };


  return (

    <div>

      {addForm == true 
      
        ? (
          <Dialog className="formInputBoxOutter" sx={{ maxWidth: "60%" }}open={addForm}>

            <div>

              <DialogTitle className="formTitleName"> Create Task Content</DialogTitle>

              <DialogContent className="formInputBoxContent">


                <div className="tileNameInputRow">

                  <TextField className="tileNameTextField" label="Task Name" onChange={handleTaskNameChange} />
                
                </div>

                <div className="tileNameInputRow">

                  <TextField className="tileNameTextField" label="Task Description" onChange={handleTaskDescriptionChange} />
                
                </div>

                <div className="statusInputRow">

                  <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <InputLabel id="demo-simple-select-helper-label">Order Field Option</InputLabel>
                    
                    <Select labelId="demo-simple-select-helper-label"
                      label="Order Field Option" className="statusTextField"
                      value={orderField} onChange={handleOrderFieldChange}
                    >

                      {orderFieldChoices.map((orderField) => (

                        <MenuItem value={orderField}>

                          <em>{orderField}</em>

                        </MenuItem>

                      ))};

                    </Select>

                  </FormControl>

                </div>
                  
                <div className="statusInputRow">

                  <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <InputLabel id="demo-simple-select-helper-label">Task Type Option</InputLabel>

                    <Select labelId="demo-simple-select-helper-label"
                      label="Task Type Option" className="statusTextField"
                      value={type} onChange={handleTypeChange}
                    >

                      {typeChoices.map((type) => (

                        <MenuItem value={type}>

                          <em>{type}</em>

                        </MenuItem>

                      ))};

                    </Select>

                  </FormControl>

                </div>


                <div className="buttonSection"> 

                  <Button onClick={handleAddFormSelectEnter}>Add</Button>

                  <Button onClick={() => {setAddForm(false)}}>Cancel</Button>

                </div>

              </DialogContent>

            </div>

          </Dialog>

      ) : null}

    </div>
  );
};

export default AddForm;