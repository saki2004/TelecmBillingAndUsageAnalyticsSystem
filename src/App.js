// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Usage from "./components/Usage";
import Billing from "./components/Billing";
import Alerts from "./components/Alerts";
import Chatbot from "./components/Chatbot";

function LayoutWrapper() {
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(false);

  const hideNav = location.pathname === "/" || location.pathname === "/login";

  return (
    <div style={appContainer}>
      {/* Navbar */}
      {!hideNav && (
        <nav style={navStyle}>
          <Link to="/dashboard" style={location.pathname === "/dashboard" ? activeBtnStyle : btnStyle}>Dashboard</Link>
          <Link to="/usage" style={location.pathname === "/usage" ? activeBtnStyle : btnStyle}>Usage</Link>
          <Link to="/billing" style={location.pathname === "/billing" ? activeBtnStyle : btnStyle}>Billing</Link>
          <Link to="/alerts" style={location.pathname === "/alerts" ? activeBtnStyle : btnStyle}>Alerts</Link>
          <button style={btnStyle} onClick={() => setShowChatbot(!showChatbot)}>
            {showChatbot ? "Close Chatbot" : "Open Chatbot"}
          </button>
        </nav>
      )}

      {/* Main Content */}
      <main style={mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </main>

      {/* Chatbot */}
      {showChatbot && !hideNav && (
        <div style={chatbotWrapper}>
          <Chatbot />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

const appContainer = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const navStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
};

const btnStyle = {
  backgroundColor: "#0056b3",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "4px",
  textDecoration: "none",
};

const activeBtnStyle = {
  ...btnStyle,
  backgroundColor: "#003d80",
  fontWeight: "bold",
};

const mainContent = {
  flex: 1,
  padding: "20px",
};

const chatbotWrapper = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  borderRadius: "12px",
  overflow: "hidden",
};
