import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { Dashboard } from "@mui/icons-material";
import Funds from "./components/Funds";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/funds" element={<Funds/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
