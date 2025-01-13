
// import React, { useState, useEffect } from "react";
// import ProductCardInline from "./ProductCardInline"; // Assuming ProductCard is the component to display each product

// const ProductGridInline = () => {
//   const [products, setProducts] = useState([]); // State to store products
//   const [loading, setLoading] = useState(true);  // State to handle loading state
//   const [error, setError] = useState(null);      // State to handle errors

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://together-grow-stutt.onrender.com/products/");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);  // Update products state with fetched data
//       } catch (error) {
//         setError(error.message); // Set error message if the fetch fails
//       } finally {
//         setLoading(false);  // Set loading state to false after fetch completes
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;  // Show loading message until data is fetched
//   }

//   if (error) {
//     return <div>Error: {error}</div>;  // Show error message if fetch fails
//   }

//   return (
//     <section className="py-4">
//       <h3 className="text-center fw-bold mb-4 fs-4 fs-md-3">COLLECTIONS</h3> {/* Responsive text */}
//       <div className="container">
//         {/* Horizontal Scrolling Container */}
//         <div className="horizontal-scroll-container">
//           {/* Duplicate the products to create the infinite scroll effect */}
//           {products.concat(products).map((product) => (
//             <div
//               key={product.id}
//               className="product-card-wrapper" // Wrapper for each product card
//             >
//               <ProductCardInline {...product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductGridInline;



import React, { useState, useEffect, useRef } from "react";
import ProductCardInline from "./ProductCardInline"; // Assuming ProductCardInline is the component to display each product

const ProductGridInline = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);      // State to handle errors
  const containerRef = useRef(null); // Reference to the scroll container

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

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const cardWidth = scrollContainer.firstElementChild.offsetWidth;

      const scrollCards = () => {
        // Keep scrolling the container to the right
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollWidth - cardWidth) {
          // Reset scroll position when we reach the end
          scrollContainer.scrollLeft = 0;
        }
      };

      const intervalId = setInterval(scrollCards, 10); // Scroll every 10ms

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [products]);

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
        {/* Horizontal Scrolling Container */}
        <div
          ref={containerRef}
          className="horizontal-scroll-container"
          style={{ display: "flex", overflowX: "auto", scrollBehavior: "smooth", padding: "10px 0" }}
        >
          {/* Map over products and create a set of cards */}
          {products.concat(products).map((product) => (
            <div
              key={product.id}
              className="product-card-wrapper"
              style={{ flex: "0 0 auto", margin: "0 10px" }}
            >
              <ProductCardInline {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridInline;
