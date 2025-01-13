import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductGridInline from "../components/ProductGridInline";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://together-grow-stutt.onrender.com/products/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  if (!product || !Array.isArray(product.images) || product.images.length === 0) {
    return <div className="container mt-5">No product images available</div>;
  }

  return (
    <>
    <Header/>
    <div className="container mt-5">
      <div className="row">
        {/* Left Side - Image Carousel */}
        <div className="col-md-4">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right Side - Product Details */}
        {/* Right Side - Product Details */}
<div className="col-md-8">
  <p className="text-uppercase fw-bold">STUTT CLOTHING BRAND</p>
  <h2 className="fw-bold">{product.name}</h2>

  {/* Price and Discount */}
  <div className="d-flex align-items-center gap-3">
    <h4 className="text-danger fw-bold">Rs. {product.discountedPrice}</h4>
    <p className="text-decoration-line-through text-muted">Rs. {product.originalPrice}</p>
    <span className="badge bg-warning text-dark">{product.discount}% off</span>
  </div>

  {/* Points */}
  <p className="text-danger fw-bold">{product.point} Points</p>

  {/* Details */}
  <p><strong>FIT:</strong> {product.fit}</p>
  <p><strong>FABRIC:</strong> {product.fabric}</p>
  <p><strong>MODEL SIZE:</strong> {product.modelSize}</p>
  <p><strong>COLOR:</strong> {product.color}</p>

  {/* Size Selection */}
  {/* <div className="mb-3">
    <h5>SIZE:</h5>
    <div className="btn-group" role="group">
      {product.sizes?.map((size) => (
        <button
          key={size}
          type="button"
          className="btn btn-outline-secondary"
        >
          {size}
        </button>
      ))}
    </div>
  </div> */}

{/* Size Selection */}
{/* <div className="mb-3">
  <h5 className="mb-2">SIZE:</h5>
  <div className="d-flex gap-2">
    {product.sizes?.map((size) => (
      <div
        key={size}
        className="border rounded text-center py-2 px-3"
        style={{ cursor: "pointer", minWidth: "40px" }}
      >
        {size}
      </div>
    ))}
  </div>
</div>

{console.log(product.sizes)} */}



  {/* Quantity Selector */}
  <div className="mb-3 d-flex align-items-center">
    <h5 className="me-3">QUANTITY:</h5>
    <div className="input-group" style={{ width: "100px" }}>
      <button className="btn btn-outline-secondary">-</button>
      <input
        type="text"
        className="form-control text-center"
        value="1"
        readOnly
      />
      <button className="btn btn-outline-secondary">+</button>
    </div>
  </div>

  {/* Wishlist Button */}
  <button className="btn btn-link text-danger">
    <i className="bi bi-heart"></i> Add to Wishlist
  </button>

  {/* Action Buttons */}
  <div className="d-flex gap-2 mt-3">
    <button className="btn btn-danger flex-grow-1">Add to Cart</button>
    <button className="btn btn-outline-danger flex-grow-1">Buy Now</button>
  </div>
</div>

      </div>
    </div>
    <ProductGridInline />
    </>
  );
};

export default ProductDetails;