import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
