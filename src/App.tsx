import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./common/Login";
import Register from "./common/Register";
import Epatrika from "./pages/Epatrika";
import PhysicalPatrika from "./pages/PhysicalPatrika";
import Aboutus from "./pages/Aboutus";
import Account from "./pages/Account";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/e-patrika" element={<Epatrika />} />
        <Route path="/physical-patrika" element={<PhysicalPatrika />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
