import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";



const Navigation = ({ setActiveStatus }) => {



  const [alignment, setAlignment] = React.useState("web");
  const statuses = ["ALL ACTIVE", "LIVE", "DRAFTS", "PENDING", "ARCHIVED"];


  const listStatuses = statuses.map((status) => (


    <ToggleButton onClick={() => setActiveStatus(status)}>

      {status}

    </ToggleButton>


  ));



  const handleStatusChange = (event, newAlignment) => {

    setAlignment(newAlignment);

  };


  return (


    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleStatusChange} aria-label="Platform">

      {listStatuses}

    </ToggleButtonGroup>


  );
};


export default Navigation;
