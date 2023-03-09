import express from "express";
import Products from "./data/product.js";
import color from 'colors'
import dotenv from "dotenv";
import ConnectDB from "./conn/db.js";
dotenv.config();
const app = express();
ConnectDB();
app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/products", (req, res) => {
  res.send(Products);
});
app.get("/api/product/:id", (req, res) => {
  const product = Products.find((p) => (p._id = req.params.id));
  res.send(product);
});
const port = process.env.PORT || 4000;
app.listen(
  4000,
  console.log(`Listen port in ${process.env.NODE_ENV} at ${port}`.yellow.bold )
);
