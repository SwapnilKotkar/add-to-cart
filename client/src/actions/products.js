import * as api from "../api";
import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_BY_SEARCH, CREATE_PRODUCT, DELETE_PRODUCT, START_LOADING, END_LOADING, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const getProducts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProducts(page);

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("FETCH_ALL_PRODUCTS error :", error.message);
  }
};

export const getProductsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchProductsBySearch(searchQuery);

    dispatch({ type: FETCH_PRODUCTS_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("FETCH_PRODUCTS_BY_SEARCH error :", error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createProduct(product);

    dispatch({ type: CREATE_PRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("CREATE_PRODUCT error :", error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.log("DELETE_PRODUCT error :", error.message);

  }
};

export const addToCart = (product) => {
  return ({ type: ADD_TO_CART, payload: product })
}

export const removeFromCart = (id) => {
  return ({ type: REMOVE_FROM_CART, payload: id })
}
