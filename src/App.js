import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import SeasonSection from "./components/SeasonSection";
import "./general.css"; // Updated path
import "./style.css"; // Updated path
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <BookSection />
                <SeasonSection />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
