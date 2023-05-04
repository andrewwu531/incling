import { Box, Grid } from "@mui/material";
import Tile from "./Tile";
import { SwipeableDrawer } from '@mui/material';

const TilesList = ({ filteredTiles, activeStatus }) => {
console.log("filter" + JSON.stringify(filteredTiles));

  return (
    <div className="tiles">
      
      <Box sx={{ flexGrow: 1, maxWidth: "80%" }}>

        <Grid container spacing={{ xs: 6, md: 4 }} direction="row">


          {filteredTiles.map(( tile, index ) => (

            <Grid item xs={6} sm={6} md={4} key={index} direction="row">

                <Tile tile={tile} />

            </Grid>

          ))}


        </Grid>

      </Box>

    </div>
  );
};

export default TilesList;
