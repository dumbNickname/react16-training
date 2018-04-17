import React from "react";

import "./Hello.css";

export const DumbHello = ({ who, onWhoChange }) => (
  <div className="hello-container">
    <span className="hello">Hello {who}</span>
    <input value={who} onChange={onWhoChange} type="text" />
  </div>
);
