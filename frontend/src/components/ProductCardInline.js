import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./ProductCardInline.css";

const ProductCardInline = ({ id, images, name, originalPrice, discountedPrice }) => {
  const firstImage = images?.[0] || "https://via.placeholder.com/150"; // Placeholder if no image

  return (
    <>
    <div className="card text-center h-80" style={{ width: "180px", margin: "0 10px", display: "flex", flexDirection: "column" }}>
      <Link to={`/product/${id}`} style={{ flex: 1 }}>
    <img
      src={firstImage}
      alt={name}
      className="card-img-top"
      style={{
        objectFit: "cover", // Ensure the image covers the entire card area without stretching
        height: "200px",     // Fixed height for the image (this can be adjusted as needed)
        width: "100%",       // Ensure the image spans the full width of the card
      }}
    />
  </Link>
      </div>
      {/* Card Body: Name and Prices */}
      <div className="card-body" style={{ paddingTop: "10px" }}>
        <h6 className="card-title mb-2 product-name" style={{ fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {name}
        </h6>
        <p className="text-muted text-decoration-line-through mb-1 product-name" style={{ fontSize: "12px" }}>
          Rs. {originalPrice}
        </p>
        <p className="fw-bold product-name" style={{ fontSize: "14px", color: '#850001' }}>
          Rs. {discountedPrice}
        </p>
      </div>
      </>
  );
};

export default ProductCardInline;
