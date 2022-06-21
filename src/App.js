import Home from "./components/Home/Home";
import Training from './components/Training/Training';
import Workspace from "./components/Workspace/Workspace"
import Event from "./components/Event/Event"
import Login from "./components/Admin/Login"
import Dashboard from "./components/Admin/Dashboard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/event" element={<Event />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path='/admin/dashboard' element={token ? <Dashboard />: <Navigate to="/admin/login"/>} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
