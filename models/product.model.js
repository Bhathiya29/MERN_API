const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    productName: {
      type: "string",
      required: true,
    },
    productDescription: {
      type: "string",
      required: true,
    },
    quantity: {
      type: "number",
      required: true,
      default: 0,
    },
    price: {
      type: "number",
      required: true,
      default: 0,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
