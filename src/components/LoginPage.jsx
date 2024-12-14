import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onClose }) => {
  return (
    <div className="login-page open">
      <div className="login-content">
        <h2>Welcome Back!</h2>
        <p>Login to access your account</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
