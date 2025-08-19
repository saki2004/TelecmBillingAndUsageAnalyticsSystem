// src/components/Dashboard.js
import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Data Usage (GB)",
        data: [12, 19, 13, 24, 18, 30],
        fill: false,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>📊 Dashboard</h2>

      <div className="metrics">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,250</p>
        </div>
        <div className="card">
          <h3>Monthly Revenue</h3>
          <p>$42,000</p>
        </div>
        <div className="card">
          <h3>Alerts Sent</h3>
          <p>320</p>
        </div>
      </div>

      <div className="chart">
        <h3>Data Usage Trend</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
