import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap"; // Import Bootstrap JavaScript (includes Carousel functionality)
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons for the icons used
import "./assets/styles/global.css"; // Import your custom styles
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
