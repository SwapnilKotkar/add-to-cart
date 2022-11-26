import axios from 'axios'

const API = axios.create({ baseURL: process.env.AXIOS_BASE_URL})

export const fetchProducts = (page) => API.get(`/products?page=${page}`);
export const fetchProductsBySearch = (searchQuery) => API.get(`/products/search?searchQuery=${searchQuery.search || 'none'}&sku=${searchQuery.SKU}&tags=${searchQuery.tags}`);
export const createProduct = (newProduct) => API.post('/products', newProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
