import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import "../../../css/Home/DeleteForm.css";


const DeleteForm = ({ tile, deleteForm, setDeleteForm }) => {

  const statuses = ["LIVE", "DRAFTS", "PENDING", "ARCHIVED"];

  // console.log("ABC" + tileName);
  // console.log("DEF" + launchDate);
  // console.log("HIJ" + status);


  const handleDeleteFormSelectEnter = async (event) => {
  
    event.preventDefault();

    try {

      await axios.delete(
        `http://127.0.0.1:8000/inclingApp/tile${tile.pk}/`);
      // console.log("HIHIHI" + response.data);
    } catch (error) {
      // console.log("ERROR" + error);

    }

    setDeleteForm(false);

    window.location.reload();

  };

  return (

    <div>

      {deleteForm == true 

      ? (  
            <Dialog className="formInputBoxOutter" 
                   sx={{ maxWidth: "60%" }} open={deleteForm}
            >

              <div>

                <DialogTitle className="formTitleName"> Delete Tile Content</DialogTitle>

                <DialogContent className="formInputBoxContent"> Are you sure about deleting this tile?</DialogContent>
                      
                <div className="buttonSection">   

                    <Button onClick={handleDeleteFormSelectEnter}> Enter</Button>
                        
                    <Button onClick={() => {setDeleteForm(false)}}>Cancel</Button>
                      
                </div>
                    
              </div>

            </Dialog>

      ) : null}

    </div>
    
  );
};


export default DeleteForm;
