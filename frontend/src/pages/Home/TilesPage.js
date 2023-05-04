import "../../css/TilesPage.css";
import logo from "../../assets/incling_logo1.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddButton, Navigation, TilesList } from "./components";
import AddForm from "../Home/components/AddForm.jsx";
import { IconButton } from "@mui/material";



const TilesPage = () => {



  const [ tiles, setTiles ] = useState([]);
  const [ activeStatus, setActiveStatus ] = useState("ALL ACTIVE");
  const [ addForm, setAddForm ] = useState(false);



  const filteredTiles =
    activeStatus === "ALL ACTIVE"
      ? tiles
      : tiles.filter((tile) => tile.status === activeStatus);



  useEffect(() => {

    const fetchData = async () => {

      const result = await axios.get("http://127.0.0.1:8000/inclingApp/tiles/");
      setTiles(result.data);
    };
    fetchData();

  }, []);



  return (
    <>
  

        <div className="tile-image-container">
          <img src={logo} alt="logo" />
        </div>



        <div className="tile-status-box-container">
          <Navigation setActiveStatus={setActiveStatus} />
        </div>



        <div>
          <TilesList
            filteredTiles={filteredTiles}
            activeStatus={activeStatus}
          />
        </div>


        <div className="tile-add-button"> 

          <IconButton onClick={() => {setAddForm(true)}} aria-label="add">

            <AddButton />

          </IconButton>

          <AddForm addForm={addForm} setAddForm={setAddForm} />

        </div>
    

      
    </>
  );
};

export default TilesPage;
