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
import "../../../css/Home/DeleteForm.css";

const DeleteForm = ({ task, deleteForm, setDeleteForm }) => {

  // console.log("ABC" + tileName);
  // console.log("DEF" + launchDate);
  // console.log("HIJ" + status);


  const handleDeleteFormSelectEnter = async (event) => {
  
    event.preventDefault();

    try {
      await axios.delete(
        `http://127.0.0.1:8000/inclingApp/task${task.id}/`);
      // console.log("HIHIHI" + response.data);
    } catch (error) {
      // console.log("ERROR" + error);
    }

    setDeleteForm(false);
    window.location.reload();
  };

  return (
    <div>
      {deleteForm == true ? (
        <Dialog
          className="formInputBoxOutter"
          sx={{ maxWidth: "60%" }}
          open={deleteForm}
          //onClose={handleSubmit}
        >
          <div>
            <DialogTitle className="formTitleName"> Delete Task Content</DialogTitle>
            <DialogContent className="formInputBoxContent"> Are you sure about deleting this tile?</DialogContent>
              <div className="buttonSection">    
                <Button onClick={handleDeleteFormSelectEnter}> Enter</Button>
                <Button
                  onClick={() => {
                    setDeleteForm(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};
export default DeleteForm;
