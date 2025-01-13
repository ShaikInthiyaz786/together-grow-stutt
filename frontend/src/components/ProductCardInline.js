// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import "./ProductCardInline.css";

// const ProductCardInline = ({ id, images, name, originalPrice, discountedPrice }) => {
//   const firstImage = images?.[0] || "https://via.placeholder.com/150"; // Placeholder if no image

//   return (
//     <div className="card text-center h-100">
//       {/* Clickable Image */}
//       <Link to={`/product/${id}`}>
//         <img
//           src={firstImage}
//           alt={name}
//           className="card-img-top"
//           style={{ objectFit: "contain", height: "100%", cursor: "pointer" }}
//         />
//       </Link>
//       {/* Card Body: Name and Prices */}
//       <div className="card-body">
//         <h1 className="card-title mb-2 product-name">{name}</h1>
//         <p className="text-muted text-decoration-line-through mb-1 product-name">Rs. {originalPrice}</p>
//         <p className="text-danger fw-bold product-name">Rs. {discountedPrice}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCardInline;



import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./ProductCardInline.css";

const ProductCardInline = ({ id, images, name, originalPrice, discountedPrice }) => {
  const firstImage = images?.[0] || "https://via.placeholder.com/150"; // Placeholder if no image

  return (
    <div className="card text-center h-100" style={{ width: "180px", margin: "0 10px" }}>
      {/* Clickable Image */}
      <Link to={`/product/${id}`}>
        <img
          src={firstImage}
          alt={name}
          className="card-img-top"
          style={{ objectFit: "contain", height: "150px", cursor: "pointer" }}
        />
      </Link>
      {/* Card Body: Name and Prices */}
      <div className="card-body">
        <h6 className="card-title mb-2 product-name" style={{ fontSize: "14px" }}>{name}</h6>
        <p className="text-muted text-decoration-line-through mb-1 product-name" style={{ fontSize: "12px" }}>
          Rs. {originalPrice}
        </p>
        <p className="text-danger fw-bold product-name" style={{ fontSize: "14px" }}>
          Rs. {discountedPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCardInline;
