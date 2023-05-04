import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TilesPage from "./pages/Home/TilesPage";
import TasksPage from "./pages/Tasks/TasksPage";

const App = () => {


  return (


    <BrowserRouter>

      <Routes>

        <Route path="/" element={<TilesPage />}></Route>
        <Route path="/tile/:pk" element={<TasksPage/>}></Route>
        
      </Routes>

    </BrowserRouter>


  );


}

export default App;