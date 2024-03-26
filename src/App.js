import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infoPage" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
