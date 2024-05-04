import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Beranda} />
        </Routes>
    </BrowserRouter>
  );
}
