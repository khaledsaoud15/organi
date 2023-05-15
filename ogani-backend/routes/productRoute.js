const router = require("express").Router();
const Product = require("../models/product");

router.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  try {
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const allProducts = await Product.find();
  try {
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/product/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
