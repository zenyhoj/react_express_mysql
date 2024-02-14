import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suppliers } from "./pages/Suppliers";
import { Update } from "./pages/Update";
import { Add } from "./pages/Add";
import { Delete } from "./pages/Delete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suppliers />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
