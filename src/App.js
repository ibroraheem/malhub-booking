import Home from "./components/Home/Home";
import Training from './components/Training/Training';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="training" element={<Training />} />
    </Routes>

    </BrowserRouter> 
    
    
  );
}

export default App;
