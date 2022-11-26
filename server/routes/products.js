import express from "express";

import { getProducts, getProductsBySearch, createProduct, deleteProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.get('/search', getProductsBySearch);
router.post("/", createProduct);
router.delete('/:id', deleteProduct);


export default router;
