"use client";
import { useState } from "react";

export default function Header() {
  const [online, setOnline] = useState(true);

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short", day: "2-digit", month: "short", year: "numeric",
  });

  return (
    <>
      <div className="header">
        <span className="header-icon">🎙️</span>
        <h1>Quick Logger</h1>
        <p>Log conversation in 10 seconds</p>
        <div className="header-badge" onClick={() => setOnline(o => !o)}>
          <span className="dot" style={online ? {} : { background: "#A0A4BD", boxShadow: "none", animation: "none" }} />
          {online ? "Online" : "Offline mode"}
        </div>
      </div>
      <div className="content" style={{ paddingBottom: 0, gap: 0 }}>
        <div className="date-bar">📅 {today}</div>
      </div>
    </>
  );
}
