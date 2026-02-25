// src/components/ui/Loader.jsx
import React from "react";
import { motion } from "framer-motion";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-wrap" role="status" aria-label="Loading">
      <motion.div
        className="loader-logo"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 1.2, ease: "anticipate" }}
      >
        <div className="loader-orb" />
      </motion.div>
      <div className="loader-text">avacasa</div>
    </div>
  );
}