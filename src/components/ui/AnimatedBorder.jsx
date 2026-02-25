// src/components/ui/AnimatedBorder.jsx
import React from "react";
import "./animated-border.css";

export default function AnimatedBorder({ children, className = "" }) {
  return (
    <div className={`animated-border ${className}`}>
      <div className="animated-border-inner">{children}</div>
    </div>
  );
}