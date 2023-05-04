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


const EditForm = ({ tile, editForm, setEditForm }) => {


  const [tileName, setTileName] = useState("");
  const [launchDate, setLaunchDate] = useState(null);
  const [status, setStatus] = useState("");
  const statuses = ["LIVE", "DRAFTS", "PENDING", "ARCHIVED"];


  console.log("ABC" + tileName);
  console.log("DEF" + launchDate);
  console.log("HIJ" + status);


  const handleEditFormSelectEnter = async (event) => {

    let data = JSON.stringify({
      pk: tile.pk,
      tile_name: tileName,
      launch_date: launchDate,
      status: status,
      participant_number: "0",
    });

    event.preventDefault();

    try {

      const response = await axios.put(
        `http://127.0.0.1:8000/inclingApp/tile${tile.pk}/`,
        JSON.parse(data)
      );
      console.log("HIHIHI" + response.data);
    } catch (error) {
      console.log("ERROR" + error);

    }


    setEditForm(false);
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
      {editForm == true ? (
        <Dialog className="formInputBoxOutter" sx={{ maxWidth: "60%" }} open={editForm}>

          <div>

            <DialogTitle className="formTitleName"> Change Tile Content</DialogTitle>

            <DialogContent className="formInputBoxContent">

              <div className="tileNameInputRow">

                <TextField className="tileNameTextField" label="Tile Name" onChange={handleTileNameChange} />
              
              </div>

              <div className="tileNameInputRow">

                <LocalizationProvider dateAdapter={AdapterDayjs}>

                  <DemoContainer components={["DatePicker"]}>

                    <DatePicker dateFormat="YYYY-MM-DD" label="Launch Date"
                                value={tile.launchDate}
                                onChange={(newLaunchDate) => setLaunchDate(dayjs(newLaunchDate).format("YYYY-MM-DD"))}
                    />

                  </DemoContainer>

                </LocalizationProvider>

              </div>

              <div className="statusInputRow">

                <FormControl sx={{ m: 1, minWidth: 120 }}>

                  <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>

                  <Select labelId="demo-simple-select-helper-label" label="Status"
                          className="statusTextField" value={status}
                          onChange={handleStatusChange}
                  >

                    {statuses.map((status) => (
                      <MenuItem value={status}>
                        <em>{status}</em>
                      </MenuItem>
                    ))};

                  </Select>

                </FormControl>

              </div>

              <div className="buttonSection">   

                <Button onClick={handleEditFormSelectEnter}> Enter</Button>

                <Button
                  onClick={() => {setEditForm(false)}}
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
