import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

import rootReducer from "./reducers";

const theme = createTheme();

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
