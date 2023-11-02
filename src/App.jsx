import React from "react";
import "./App.css";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Componentes/User/User";
import ProtectedRouter from "./Componentes/Helper/ProtectedRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
