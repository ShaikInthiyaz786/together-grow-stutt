import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.auth}>
      <div style={styles.formContainer}>
        <div style={styles.tabContainer}>
          <button
            onClick={() => setIsLogin(true)}
            style={isLogin ? styles.activeTab : styles.inactiveTab}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={!isLogin ? styles.activeTab : styles.inactiveTab}
          >
            Signup
          </button>
        </div>
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("https://together-grow-stutt.onrender.com/auth/login", {
        username,
        password,
      });
      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      <input
        type="text"
        placeholder="Email Address"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <a href="#" style={styles.link}>
        Forgot password?
      </a>
      <button type="submit" style={styles.button}>
        Login
      </button>
      <p style={styles.footerText}>
        Not a member?{" "}
        <a href="#" style={styles.link}>
          Signup now
        </a>
      </p>
    </form>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://together-grow-stutt.onrender.com/auth/register", {
        username,
        password,
      });
      setShowPopup(true); // Show the popup on success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Register</h2>
        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      {showPopup && (
        <Popup
          message="Registration Completed! Now you can login."
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

const Popup = ({ message, onClose }) => {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
        <p>{message}</p>
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  auth: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1A73E8",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "400px",
    padding: "20px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #1A73E8",
    backgroundColor: "transparent",
    fontWeight: "bold",
    cursor: "pointer",
  },
  inactiveTab: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #ccc",
    backgroundColor: "transparent",
    color: "#999",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#1A73E8",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  link: {
    color: "#1A73E8",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    marginBottom: "20px",
    textAlign: "right",
  },
  footerText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    marginTop: "10px",
    backgroundColor: "#1A73E8",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
