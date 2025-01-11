import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; // Assuming ProductCard is the component to display each product

const ProductGrid = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);      // State to handle errors

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);  // Update products state with fetched data
      } catch (error) {
        setError(error.message); // Set error message if the fetch fails
      } finally {
        setLoading(false);  // Set loading state to false after fetch completes
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message until data is fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if fetch fails
  }

  return (
    <section className="py-4">
      <h3 className="text-center fw-bold mb-4 fs-4 fs-md-3">COLLECTIONS</h3> {/* Responsive text */}
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-6 col-sm-6 col-md-4 col-lg-3" // Two cards on mobile view
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
