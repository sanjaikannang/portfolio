import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/project" element={<Project/>} />
    <Route  path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
