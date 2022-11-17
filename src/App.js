import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Botones from "./Components/Botones";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Servicios />} />
        </Routes>
        <Botones />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
