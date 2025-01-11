import React from "react";

// Update the path to reflect the correct folder structure
const images = [
  { src: require("../assets/images/product1.jpg"), name: "Shirts" },
  { src: require("../assets/images/product2.jpg"), name: "combo" },
  { src: require("../assets/images/product3.webp"), name: "T-shirts" },
  { src: require("../assets/images/product4.webp"), name: "Luxury" },
];

const Circles = () => (
  <div className="d-flex justify-content-center gap-3 my-3">
    {images.map((image, i) => (
      <div key={i} className="text-center">
        {/* Circle with image */}
        <div
          className="rounded-circle"
          style={{
            width: "60px", // Adjust size as needed
            height: "60px",
            overflow: "hidden",
            border: "2px solid #ccc", // Optional border
          }}
        >
          <img
            src={image.src}
            alt={`Circle ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image fits well
            }}
          />
        </div>
        {/* Name below the circle */}
        <p className="mt-2 mb-0">{image.name}</p>
      </div>
    ))}
  </div>
);

export default Circles;
