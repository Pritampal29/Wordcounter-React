import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import WordCounter from "./components/WordCounter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
