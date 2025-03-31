import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import About from "./pages/About";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <NavBar />
      <div className="content">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
