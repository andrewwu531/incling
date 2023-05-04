import { Card, CardContent, CardMedia, IconButton, CardActions, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import tileImage1 from "../../../assets/tile_img_1.png";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import { Link } from "react-router-dom";

const Tile = ({ tile }) => {

  const [tileEditForm, setTileEditForm] = useState(false);
  const [tileDeleteForm, setTileDeleteForm] = useState(false);

  return (

      <Card sx={{ maxWidth: 345 }} className="tile-edit-delete-button-section">

        <div className="section">
          <div className="tile-container">

            <CardMedia component="img" alt="green iguana" height="140" image={tileImage1}  
            />
          
            <div class="tile-go-status-container">
              <Link className="tile-go-button" to={`/tile/${tile.pk}`} state={{ from: tile.pk }}> GO </Link>
              <div className="tile-status-box">{tile.status} </div>
            </div>

          </div>
        

          <div className="tile-content-container">

            <CardContent>

                <Typography gutterBottom variant="h5" component="div">

                <div className="tile-tile-edit-group">

                    <IconButton aria-label="edit" className="tile-edit-button">

                        <EditIcon onClick={() => {setTileEditForm(true)}} />
                        <EditForm tile={tile} editForm={tileEditForm} setEditForm={setTileEditForm} />
                    
                    </IconButton>

                    <IconButton aria-label="delete" className="tile-delete-button">

                          <DeleteIcon onClick={() => {setTileDeleteForm(true)}} />
                          <DeleteForm tile={tile} deleteForm={tileDeleteForm} setDeleteForm={setTileDeleteForm} />
                          
                    </IconButton> 

                </div> 


                <div className="third-tile-section">
                  {tile.tile_name}
                </div>


                <div className="last-tile-section">
                  
                  <div>{tile.launch_date} </div>
                  <div>{tile.participant_number}</div>

                </div>

                </Typography>
              
            </CardContent>
          </div>
        
        </div>
        
      </Card>  

                
  );
};

export default Tile;
