import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
