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
import "../../../css/Home/EditForm.css";


const EditForm = ({ task, editForm, setEditForm }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [orderField, setOrderField] = useState("");
  const [type, setType] = useState("");
  const orderFieldChoices = ["HIGH", "MEDIUM", "LOW"];
  const typeFieldChoices = ["DISCUSSION", "SURVEY", "DIARY", "OTHERS"];

  // console.log("ABC" + tileName);
  // console.log("DEF" + launchDate);
  // console.log("HIJ" + status);


  const handleEditFormSelectEnter = async (event) => {
    
    let data = JSON.stringify({
      id: task.id,
      tile: task.tile,
      task_name: taskName,
      task_description: taskDescription,
      participant_number: "0",
      order_field: orderField,
      type: type,
    });

    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/inclingApp/task${task.id}/`,
        JSON.parse(data)
      );
      // console.log("HIHIHI" + response.data);
    } catch (error) {
      // console.log("ERROR" + error);
    }

    setEditForm(false);
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
      {editForm == true ? (
        <Dialog
          className="formInputBoxOutter"
          sx={{ maxWidth: "60%" }}
          open={editForm}
        >
          <div>
            <DialogTitle className="formTitleName"> Change Task Content</DialogTitle>
            <DialogContent className="formInputBoxContent">
              <div className="tileNameInputRow">
                <TextField className="tileNameTextField" label="Task Name" onChange={handleTaskNameChange} />
              </div>

              <div className="tileNameInputRow">
                <TextField className="tileNameTextField" label="Task Description" onChange={handleTaskDescriptionChange} />
              </div>
             

              <div className="statusInputRow">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">Task Priority</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    label="Status"
                    className="statusTextField"
                    value={orderField}
                    onChange={handleOrderFieldChange}
                  >
                    {orderFieldChoices.map((order) => (
                      <MenuItem value={order}>
                        <em>{order}</em>
                      </MenuItem>
                    ))}
                    ;
                  </Select>
                </FormControl>
              </div>

              <div className="statusInputRow">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">Task Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    label="Status"
                    className="statusTextField"
                    value={type}
                    onChange={handleTypeChange}
                  >
                    {typeFieldChoices.map((type) => (
                      <MenuItem value={type}>
                        <em>{type}</em>
                      </MenuItem>
                    ))}
                    ;
                  </Select>
                </FormControl>
              </div>

              <div className="buttonSection">    
                <Button onClick={handleEditFormSelectEnter}>Enter</Button>
                <Button
                  onClick={() => {
                    setEditForm(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};
export default EditForm;
