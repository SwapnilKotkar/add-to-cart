import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import useStyles from './styles'
import Cart from "./components/Cart/Cart";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container className={classes.containerWidth}>
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
