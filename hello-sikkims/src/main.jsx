import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PackageDetails from './pages/PackageDetails'; 
import Cabs from './pages/Cabs'
import Adventure from './pages/Adventure'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);