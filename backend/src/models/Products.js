// import mongoose from "mongoose";

// const productSchema = mongoose.Schema({
//   id: {
//     type: Number,
//     required: true,
//     unique: true, // Ensures no duplicate IDs
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   originalPrice: {
//     type: Number,
//     required: true,
//   },
//   discountedPrice: {
//     type: Number,
//     required: true,
//   },
//   images: {
//     type: [String], // Array of strings to store multiple image URLs
//     required: true,
//   },
// });

// export const ProductModel = mongoose.model("Products", productSchema);




import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensures no duplicate IDs
  },
  name: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  images: {
    type: [String], // Array of strings to store multiple image URLs
    required: true,
  },
  point: {
    type: String, // Points (e.g., "Special offer", "Best seller")
    required: false,
  },
  fit: {
    type: String, // Fit (e.g., "Regular", "Slim")
    required: false,
  },
  fabric: {
    type: String, // Fabric type (e.g., "Cotton", "Polyester")
    required: false,
  },
  modelSize: {
    type: String, // Model size (e.g., "M", "L", "S")
    required: false,
  },
  color: {
    type: String, // Color of the product (e.g., "Red", "Blue")
    required: false,
  },
});

export const ProductModel = mongoose.model("Products", productSchema);
