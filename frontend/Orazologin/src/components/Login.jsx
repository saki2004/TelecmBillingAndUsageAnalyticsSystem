import React, { useEffect, useState } from "react";
import { FaUserShield, FaMoon, FaSun } from "react-icons/fa";
import { MdOutlinePassword, MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./Login.css";

export default function Login() {
  const [theme, setTheme] = useState("light");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  // Persist theme
  useEffect(() => {
    const stored = localStorage.getItem("orazo-theme");
    if (stored) setTheme(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("orazo-theme", theme);
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "admin" && password === "orazo123") {
      alert("Welcome to Orazo Admin Panel 🚀");
      setError("");
    } else setError("Invalid User ID or Password");
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="shell">
        {/* Brand / Illustration Side */}
        <aside className="brand-side">
          <div className="brand-wrap">
            <span className="signal signal--1" />
            <span className="signal signal--2" />
            <span className="signal signal--3" />
            <h1 className="brand-title">
              <span className="brand-line">Orazo</span>
              <span className="brand-line">Telecom</span>
            </h1>
            <p className="brand-tag">Admin Suite</p>
          </div>
        </aside>

        {/* Form Side */}
        <main className="form-side">
          <div className="top-bar">
            <button
              aria-label="Toggle theme"
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              title={theme === "light" ? "Switch to dark" : "Switch to light"}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          <section className="form-card">
            <h2 className="welcome">Welcome back!</h2>
            <p className="subtitle">Please enter your details</p>

            <form onSubmit={handleSubmit} noValidate>
              <label className="input-row">
                <span className="leading"><FaUserShield/></span>
                <input
                  type="text"
                  placeholder="User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </label>

              <label className="input-row">
                <span className="leading"><MdOutlinePassword/></span>
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="trailing"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </label>

              {error && <p className="error">{error}</p>}

              <div className="row options">
                <label className="remember">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button className="btn btn-primary" type="submit">Log in</button>
              <button className="btn btn-neutral" type="button">Log in with Google</button>

              <p className="signup">
                Don’t have an account? <a href="#">Sign Up</a>
              </p>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
