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


const AddForm = ({ addForm, setAddForm }) => {


  const [tileName, setTileName] = useState("");
  const [launchDate, setLaunchDate] = useState(null);
  const [status, setStatus] = useState("");
  const statuses = ["LIVE", "DRAFTS", "PENDING", "ARCHIVED"];

  // console.log("ABC" + tileName);
  // console.log("DEF" + launchDate);
  // console.log("HIJ" + status);


  const handleAddFormSelectEnter = async (event) => {
   
    let data = JSON.stringify({
      tile_name: tileName,
      launch_date: launchDate,
      status: status,
      participant_number: "0",
    });

    event.preventDefault();

    try {

      axios.post(
        `http://127.0.0.1:8000/inclingApp/tiles/`,
        JSON.parse(data)

      );

      // console.log("HIHIHI" + response.data);
    } catch (error) {
      // console.log("ERROR" + error);

    }

    setAddForm(false);
    window.location.reload();

  };

  const handleTileNameChange = (event) => {
    setTileName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>

      {addForm == true 

        ? (
        
          <Dialog className="tile-create-form-container" sx={{ maxWidth: "60%" }} open={addForm}>

            <div className="tile-create-form-text-title-container">

              <DialogTitle className="tile-create-form-text-title">Create Tile</DialogTitle>
            
            </div>

            <DialogContent>

                  <TextField className="tile-create-form-tile-name-box" label="Tile Name" onChange={handleTileNameChange} />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DemoContainer components={["DatePicker"]}>
                      
                      <DatePicker dateFormat="YYYY-MM-DD" label="Launch Date"
                            value={launchDate} onChange={(newLaunchDate) =>
                            setLaunchDate(dayjs(newLaunchDate).format("YYYY-MM-DD"))}
                      />

                    </DemoContainer>

                  </LocalizationProvider>

                <FormControl className="tile-create-form-status-box" sx={{ m: 1, minWidth: 120 }}>

                  <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    
                  <Select labelId="demo-simple-select-helper-label"
                          label="Status"
                          value={status} onChange={handleStatusChange}
                  >

                    {statuses.map((status) => (

                      <MenuItem value={status}>  <em>{status}</em>  </MenuItem>
                      
                    ))};

                  </Select>

                </FormControl>

              <div class="tile-create-form-enter-cancel-container"> 

                <Button onClick={handleAddFormSelectEnter}>Add</Button>
                      
                <Button onClick={() => {setAddForm(false)}}>Cancel</Button>

              </div>

            </DialogContent>

        </Dialog>

      ) : null}

    </div>
  );
};

export default AddForm;
