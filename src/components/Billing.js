// src/components/Billing.js
import React, { useState } from "react";
import './Billing.css';

const sampleInvoices = [
  { id: 1, user: "Alice", month: "July 2025", amount: 50.25, status: "Paid" },
  { id: 2, user: "Bob", month: "July 2025", amount: 75.00, status: "Due" },
  { id: 3, user: "Charlie", month: "July 2025", amount: 120.50, status: "Paid" },
];

const Billing = () => {
  const [invoices] = useState(sampleInvoices);

  const handleDownload = (invoice) => {
    alert(`Simulating PDF download for invoice ${invoice.id} (${invoice.user})`);
    // Later, integrate actual PDF generation
  };

  const handleEmail = (invoice) => {
    alert(`Simulating sending invoice ${invoice.id} (${invoice.user}) by email`);
    // Later, integrate actual email API
  };

  return (
    <div className="billing">
      <h2>💳 Billing Invoices</h2>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Month</th>
            <th>Amount ($)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
              <td>{inv.user}</td>
              <td>{inv.month}</td>
              <td>{inv.amount.toFixed(2)}</td>
              <td>{inv.status}</td>
              <td>
                <button onClick={() => handleDownload(inv)}>Download PDF</button>
                <button onClick={() => handleEmail(inv)}>Send Email</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
