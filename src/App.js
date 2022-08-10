import React, { Component, useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import Prism from "./pages/Prism";
import Inner from "./pages/Inner";
import Outer from "./pages/Outer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="Main">
        <div className="Logo">
          <Header />
        </div>
        <Nav /> {/* Nav.js는 상단 버튼 관련 기능 */}
        <div className="Container">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/inner" element={<Inner />} />
            <Route path="/prism" element={<Prism />} />
            <Route path="/outer" element={<Outer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
