import React from "react";
import logo from "../assets/images/logo1.png"; // Replace with your logo path
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <header className="navbar navbar-light bg-light shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side: Logo */}
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="me-3"
            style={{ height: "40px", marginLeft: "15px" }}
          />
        </div>

        {/* Center: Title */}
        <div className="text-center flex-grow-1" style={{ marginRight: "40px" }}>
          <h1 className="h5 fw-bold mb-0" style={{ fontFamily: "Serif-Humanist" }}>
            TOGETHER GROW
          </h1>
        </div>

        {/* Right side: Login/Register or Logout button */}
        <div className="d-flex gap-3" style={{ marginRight: "15px" }}>
          {!cookies.access_token ? (
            <Link to="/auth" className="btn btn-link">
              <div className="d-flex gap-3">
        <i className="bi bi-person fs-4"></i>
      </div>
            </Link>
          ) : (
            <button onClick={logout} className="btn btn-link">
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
