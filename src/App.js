import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SrebrnaLija from "./pages/SerbrnaLija";
import Dom from "./pages/Dom";
import Skola from "./pages/Skola";
import Slet from "./pages/Slet";
import Orijentiring from "./pages/Orijentiring";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/srebrnalija" element={<SrebrnaLija />} />
      <Route path="/dom" element={<Dom />} />
      <Route path="/skola" element={<Skola />} />
      <Route path="/slet" element={<Slet />} />
      <Route path="/orijentiring" element={<Orijentiring />} />
      <Route path="/historija" element={<History />} />
    </Routes>
  );
}

export default App;
