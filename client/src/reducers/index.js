import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./products";

const rootReducer = combineReducers({ productsReducer });

export default rootReducer
