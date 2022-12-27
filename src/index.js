import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Protected from "./components/Protected";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/search" element={<Protected />}>
        <Route path="/search" element={<Search />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
