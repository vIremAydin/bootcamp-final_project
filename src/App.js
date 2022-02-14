import './App.css';
import Welcome from "./pages/Welcome";
import ManageSite from "./pages/ManageSite";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/manageSite' element={<ManageSite/>}/>
      </Routes>

  );
}

export default App;
