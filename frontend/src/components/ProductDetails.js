// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ProductPage = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Left Side - Image Carousel */}
//         <div className="col-md-4">
//           <div
//             id="carouselExample"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img
//                   src="path-to-image-1.jpg"
//                   className="d-block w-100"
//                   alt="..."
//                 />
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src="path-to-image-2.jpg"
//                   className="d-block w-100"
//                   alt="..."
//                 />
//               </div>
//               {/* Add more images here */}
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExample"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExample"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Product Details */}
//         <div className="col-md-8">
//           <h2 className="fw-bold">RWDY ESSENTIAL SWEATSHIRT</h2>
//           <p>You will earn <strong>24 coins</strong> with this product</p>

//           {/* Size Selection */}
//           <div className="mb-3">
//             <h5>Size</h5>
//             <div className="btn-group" role="group" aria-label="Size options">
//               <button type="button" className="btn btn-outline-secondary">
//                 XS
//               </button>
//               <button type="button" className="btn btn-outline-secondary">
//                 S
//               </button>
//               <button type="button" className="btn btn-outline-secondary">
//                 M
//               </button>
//               <button type="button" className="btn btn-outline-secondary">
//                 L
//               </button>
//               <button type="button" className="btn btn-outline-secondary">
//                 XL
//               </button>
//               <button type="button" className="btn btn-outline-secondary active">
//                 XXL
//               </button>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-3">
//             <h5>Price</h5>
//             <p className="text-danger fw-bold">₹ 2490</p>
//           </div>

//           {/* Buttons */}
//           <div className="d-flex gap-2">
//             <button className="btn btn-outline-primary w-50">Add to Cart</button>
//             <button className="btn btn-primary w-50">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom"; // Assuming you are using React Router for navigation

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/product/${id}`);
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

  if (!product) {
    return <div className="container mt-5">No product found</div>;
  }
  console.log(product.image)

  return (
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
              <img
                    src={product.image}
                    className="d-block w-100"
                    alt={`Product Image`}
                  />
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
        <div className="col-md-8">
          <h2 className="fw-bold">{product.name}</h2>
          <p>
            You will earn <strong>{product.coins} coins</strong> with this product
          </p>

          {/* Size Selection */}
          <div className="mb-3">
            <h5>Size</h5>
            <div className="btn-group" role="group" aria-label="Size options">
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
          </div>

          {/* Price */}
          <div className="mb-3">
            <h5>Price</h5>
            <p className="text-danger fw-bold">₹ {product.originalPrice}</p>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary w-50">Add to Cart</button>
            <button className="btn btn-primary w-50">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
