import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, originalPrice, discountedPrice }) => (
  <div className="card text-center h-100">
    {/* Full Image */}
    <img 
      src={image} 
      alt={name} 
      className="card-img-top" 
      style={{ objectFit: "contain", height: "100%" }} 
    />
    {/* Card Body: Name and Prices */}
    <div className="card-body">
      <h1 className="card-title mb-2 product-name">{name}</h1> {/* Responsive text size */}
      <p className="text-muted text-decoration-line-through mb-1 product-name">Rs. {originalPrice}</p>
      <p className="text-danger fw-bold product-name">Rs. {discountedPrice}</p>
    </div>
  </div>
);

export default ProductCard;

