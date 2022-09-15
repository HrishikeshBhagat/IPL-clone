import React from "react";
import "./App.css";
import About from "./components/About";
import Teams from "./components/Teams";
import WomenTeam from "./components/WomenTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="teams" element={<Teams />} />
        <Route path="WomenTeam" element={<WomenTeam />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
