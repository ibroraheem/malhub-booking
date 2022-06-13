import Home from "./components/Home/Home";
import Training from './components/Training/Training';
import Workspace from "./components/Workspace/Workspace"
import Event from "./components/Event/Event"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="training" element={<Training />} />
      <Route path="workspace" element={<Workspace />} />
      <Route path="event" element={<Event />} />
    </Routes>

    </BrowserRouter> 
    
    
  );
}

export default App;
