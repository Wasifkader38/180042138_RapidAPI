import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Game } from "../pages/Game";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/game/:id" element={<Game/>} />
      </Routes>
    </Router>
  );

}
