import React, { useState, useEffect, useRef } from "react";
import ProductCardInline from "./ProductCardInline"; // Assuming ProductCardInline is the component to display each product

const ProductGridInline = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);      // State to handle errors

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://together-grow-stutt.onrender.com/products/");
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

  // Adjust the scroll position for continuous loop
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // If we reached the end, reset the scroll position to start
    if (scrollLeft >= scrollWidth - clientWidth) {
      container.scrollLeft = 0;
    }
    // If we reached the start, reset the scroll to the end
    else if (scrollLeft <= 0) {
      container.scrollLeft = scrollWidth - clientWidth;
    }
  };

  return (
    <section className="py-4">
      <h3 className="text-center fw-bold mb-4 fs-4 fs-md-3">COLLECTIONS</h3> {/* Responsive text */}
      <div className="container">
        {/* Horizontal Scrolling Container */}
        <div className="horizontal-scroll-wrapper">
          <div
            className="horizontal-scroll-container"
            ref={scrollContainerRef}
            onScroll={handleScroll}  // Trigger when user scrolls
          >
            {/* Display products in an infinite loop */}
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card-wrapper"
                style={{ flex: "0 0 auto", margin: "0 10px" }}
              >
                <ProductCardInline {...product} />
              </div>
            ))}

            {/* Repeat the products at the end to create the infinite effect */}
            {products.map((product) => (
              <div
                key={`repeat-${product.id}`}
                className="product-card-wrapper"
                style={{ flex: "0 0 auto", margin: "0 10px" }}
              >
                <ProductCardInline {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridInline;
