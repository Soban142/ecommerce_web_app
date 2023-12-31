const Product = require("../models/Product.js");

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.satus(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.satus(500).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProducts = async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  let products;
  try {
    if (queryNew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
};
