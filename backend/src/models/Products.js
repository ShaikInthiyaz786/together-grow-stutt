// import mongoose from "mongoose";

// const recipeSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   ingredients: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   instructions: {
//     type: String,
//     required: true,
//   },

//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   cookingTime: {
//     type: Number,
//     required: true,
//   },
//   userOwner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
// });

// export const RecipesModel = mongoose.model("Products", recipeSchema);




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
  image: {
    type: String, // Assuming `product1` is a URL or file path
    required: true,
  },
});

export const ProductModel = mongoose.model("Products", productSchema);
