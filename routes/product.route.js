const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/api/products", createProduct);
router.get("/api/products/:id", getProduct);
router.put("/api/products/:id", updateProduct);
router.delete("/api/products/:id", deleteProduct);

module.exports = router;
