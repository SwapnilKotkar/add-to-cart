import mongoose from "mongoose";
import Products from "../models/productsSchema.js";

export const getProducts = async (req, res) => {
  const { page } = req.query;
  try {
    const PRODUCTS_LIMIT = 9;
    const startIndex = (Number(page) - 1) * PRODUCTS_LIMIT;
    const total = await Products.countDocuments({});

    const products = await Products.find().sort({ _id: -1 }).limit(PRODUCTS_LIMIT).skip(startIndex);

    res.status(200).json({ data: products, currentPage: Number(page), numberOfPages: Math.ceil(total / PRODUCTS_LIMIT) });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getProductsBySearch = async (req, res) => {
  const {searchQuery, sku, tags} = req.query;

  let products = [];

  try {

    if(searchQuery) {
      const title = new RegExp(searchQuery, 'i')
      const result = await Products.find({ Title: title })
      products.push(...result)
    }

    if(sku) {
      const result = await Products.find({ Variant_SKU: sku })
      products.push(...result)
    }

    if(tags) {
      const result = await Products.find({ Tags: { $in: tags.split(',') }})
      products.push(...result)
    }

    res.json({ data: products})

  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Products(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Products.findByIdAndRemove(id);

  res.json({ message: "Product deleted successfully." });
};
