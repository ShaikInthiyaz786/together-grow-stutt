import express from "express";
import mongoose from "mongoose";
import { ProductModel } from "../models/Products.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./user.js";

const router = express.Router();
// Route to get all products
router.get("/", async (req, res) => {
  try {
    const result = await ProductModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a product by ID
router.get("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await ProductModel.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const { id, name, originalPrice, discountedPrice, images, point, fit, fabric, modelSize, color } = req.body;

    // Validate required fields
    if (!id || !name || !originalPrice || !discountedPrice || !images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ error: "All fields are required, and 'images' must be a non-empty array" });
    }

    // Create a new product
    const newProduct = new ProductModel({
      id,
      name,
      originalPrice,
      discountedPrice,
      images,
      point,
      fit,
      fabric,
      modelSize,
      color,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      res.status(400).json({ error: "Product ID must be unique" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});


router.put("/product/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  // Validate images if provided
  if (updatedData.images && (!Array.isArray(updatedData.images) || updatedData.images.length === 0)) {
    return res.status(400).json({ error: "'images' must be a non-empty array" });
  }

  try {
    // Find the product by ID and update it with the new data
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { id: productId }, // Find by the product's id
      updatedData, // Data to update
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct); // Return the updated product
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});



// Route to delete a product by ID
router.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID and delete it
    const deletedProduct = await ProductModel.findOneAndDelete({ id: productId });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


export { router as productRouter };
