import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
               src={slide1}
              className="d-block w-100"
              alt="slide 1"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn btn-dark">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="d-block w-100"
              alt="New Arrivals"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn btn-dark">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="d-block w-100"
              alt="Limited Edition"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn btn-dark">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
