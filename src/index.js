import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Poster from "./pages/Poster";
import Dashboard from "./pages/Dashboard";
import LinReg from "./pages/LinReg";
import RanNos from "./pages/RanNos";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rannos" element={<RanNos />} />
        <Route path="linreg" element={<LinReg />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
