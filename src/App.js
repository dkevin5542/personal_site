import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experiences";
import About from "./pages/about";

function App() {
  return (
    <Router> 
      <NavBar />
      <div className="content">
        <Routes>
          <Route index path="/personal_site" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
