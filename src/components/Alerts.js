// src/components/Alerts.js
import React, { useState } from "react";
import './Alerts.css';

const initialAlerts = [
  { id: 1, user: "Alice", message: "Data usage nearing limit", date: "2025-08-10" },
  { id: 2, user: "Bob", message: "Call duration exceeded 2 hours", date: "2025-08-12" },
];

const Alerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const handleSendAlert = () => {
    if (!user || !message) {
      alert("Please fill both user and message");
      return;
    }
    const newAlert = {
      id: alerts.length + 1,
      user,
      message,
      date: new Date().toISOString().split('T')[0],
    };
    setAlerts([newAlert, ...alerts]);
    setUser("");
    setMessage("");
  };

  return (
    <div className="alerts">
      <h2>🚨 Usage Alerts</h2>

      <div className="alert-form">
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alert message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendAlert}>Send Alert</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.user}</td>
              <td>{alert.message}</td>
              <td>{alert.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
