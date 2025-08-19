import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text) => {
    if (!("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const voices = synth.getVoices();
    const preferred =
      voices.find((v) => v.name.toLowerCase().includes("english")) || voices[0];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = preferred || null;
    utterance.pitch = 1;
    utterance.rate = 1;

    synth.speak(utterance);
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
  };

  return (
    <div className="container">
      {/* Moving Announcement */}
      <div className="movingNote">
        <span>
          📢 TeleComX: Track usage, view bills, and analyze trends in one place.
        </span>
      </div>

      {/* Hero / Avatar */}
      <div className="avatarContainer">
        <div
          className="avatar"
          onClick={() =>
            speak(
              "Welcome to TeleComX. Monitor your call, SMS and data usage, check bills and explore analytics."
            )
          }
          title="Click to hear a quick intro"
        >
          <div className="avatarImage">📶</div>
        </div>
      </div>

      {/* Heading & Subtext */}
      <h1 className="greeting">TeleComX</h1>
      <p className="description">
        Telecom Billing & Usage Analytics — simple dashboards for customers and admins.
      </p>

      {/* CTA Buttons */}
      <div className="buttonsContainer">
        <button className="adminButton" onClick={() => navigate("/admin")}>
          Admin
        </button>
        <button className="userButton" onClick={() => navigate("/user")}>
          User
        </button>
      </div>

      {/* Quick Links */}
      <div className="cards">
        <div className="card" onClick={() => navigate("/usage")}>
          <h2>📊 Usage Dashboard</h2>
          <p>Minutes, SMS, Data trends.</p>
        </div>
        <div className="card" onClick={() => navigate("/billing")}>
          <h2>💳 Billing</h2>
          <p>Invoices, payments, plans.</p>
        </div>
        <div className="card" onClick={() => navigate("/alerts")}>
          <h2>🔔 Alerts</h2>
          <p>Threshold & overdue notices.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;