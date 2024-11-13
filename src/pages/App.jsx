import React from "react";
import Header from "../components/Header/Header.jsx";
import Home from "../pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
