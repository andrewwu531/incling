import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="Add">
        <AddIcon  />
      </Fab>
    </Box>
  );
};
export default AddButton;
