// src/components/Usage.js
import React, { useState } from "react";
import './Usage.css';

const sampleUsageData = [
  { id: 1, user: "Alice", type: "Call", duration: "00:05:23", date: "2025-08-01" },
  { id: 2, user: "Bob", type: "Data", volumeMB: 150, date: "2025-08-02" },
  { id: 3, user: "Charlie", type: "Call", duration: "00:10:12", date: "2025-08-03" },
  { id: 4, user: "Alice", type: "Data", volumeMB: 300, date: "2025-08-05" },
];

const Usage = () => {
  const [usage] = useState(sampleUsageData);

  return (
    <div className="usage">
      <h2>📞 Usage Logs</h2>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Duration / Volume</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {usage.map((log) => (
            <tr key={log.id}>
              <td>{log.user}</td>
              <td>{log.type}</td>
              <td>
                {log.type === "Call" ? log.duration : `${log.volumeMB} MB`}
              </td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usage;
