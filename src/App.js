import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sandblast from "./routes/Sandblast";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Budget from "./routes/Budget";
import Gallery from "./routes/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sandblast" element={<Sandblast />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/budget" element={<Budget />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
