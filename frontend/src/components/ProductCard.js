import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./ProductCard.css";

const ProductCard = ({ id, images, name, originalPrice, discountedPrice }) => {
  // Use the first image in the array, or a fallback image if none exists
  const firstImage = images?.[0] || "https://via.placeholder.com/150"; // Placeholder if no image

  return (
    <div className="card text-center h-100">
      {/* Clickable Image */}
      <Link to={`/product/${id}`}> {/* Navigate to product details page with product ID */}
        <img
          src={firstImage}
          alt={name}
          className="card-img-top"
          style={{ objectFit: "contain", height: "100%", cursor: "pointer" }}
        />
      </Link>
      {/* Card Body: Name and Prices */}
      <div className="card-body">
        <h1 className="card-title mb-2 product-name">{name}</h1> {/* Responsive text size */}
        <p className="text-muted text-decoration-line-through mb-1 product-name">Rs. {originalPrice}</p>
        <p className="text-danger fw-bold product-name">Rs. {discountedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
