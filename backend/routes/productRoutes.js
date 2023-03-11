import express from "express";
import Products from "../models/productModel.js";
const router = express.Router();
import asyncHandler from 'express-async-handler'
// @desc Fetch All Products
// @route GET/api/products
// @access Public
router.get("/",  async (req, res) => {
    const product = await Products.find();
    res.json(product);
});
// @desc Fetch All Products
// @route GET/api/products
// @access Public

router.get("/:id",asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error('Product not found');
  }
}));

export default router;
