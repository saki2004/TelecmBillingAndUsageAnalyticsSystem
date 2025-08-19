import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! Welcome to Telecom Assistant. Type 'Usage', 'Bill', or 'Alerts' to continue." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    handleBotResponse(input);
    setInput("");
  };

  const handleBotResponse = (userInput) => {
    let reply = "";

    if (/usage/i.test(userInput)) {
      reply = "📊 Please enter your Customer ID to check usage.";
    } else if (/bill/i.test(userInput)) {
      reply = "🧾 Please enter your Customer ID to view your bill.";
    } else if (/alert/i.test(userInput)) {
      reply = "⚡ Do you want to enable alerts for high usage? (Yes/No)";
    } else if (/yes/i.test(userInput)) {
      reply = "✅ Alerts enabled! You’ll now get notified when usage crosses 80%.";
    } else if (/no/i.test(userInput)) {
      reply = "👌 No problem! Alerts are not enabled.";
    } else {
      reply = "🤖 Sorry, I didn’t understand. Try typing 'Usage', 'Bill', or 'Alerts'.";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
