const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();

// configuring middleware for json
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://bloguser12:bloguser12@cluster0.g71g7.mongodb.net/api_data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting");
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// routes
app.use("/api/products", productRoute);

// default /
app.get("/", (req, res) => {
  res.send("visit -  api / products");
});
