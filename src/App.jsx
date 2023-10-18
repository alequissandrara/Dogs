import React from "react";
import "./App.css";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
