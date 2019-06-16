import React from "react";

const Text = ({ label, color = "var(--black)", onClick, className = "" }) => (
  <button
    className={`button-container button-text ${className}`}
    type="button"
    onClick={onClick}
    style={{ color }}
  >
    {label}
  </button>
);

export default Text;
