import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/products"/>} />
          <Route path="/products" exact element={<Home />} />
          <Route path="/products/search" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
