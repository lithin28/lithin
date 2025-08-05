import React, { useState } from 'react';
import './Jlog.css';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Jlog = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="login-container">
      <h2 className="login-title">Login to continue</h2>

      <form className="login-form">
        <label htmlFor="username">User name / Company name</label>
        <input
          id="username"
          type="text"
      
          className="input-field"
        />

        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
          
            className="input-field"
          />
          <span className="toggle-icon" onClick={togglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="options-row">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};
