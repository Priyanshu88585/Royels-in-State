// src/components/property/PropertyCard.jsx

import { useState } from "react";

export default function PropertyCard({ villa }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="villa-card animated-border"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="animated-border-inner">
        {/* Image */}
        <div className="villa-img-wrap">
          <img src={villa.images[0]} alt={villa.name} className="villa-img" />
          <div className="villa-overlay" />
        </div>

        {/* Content */}
        <div className="villa-content">
          <h3 className="villa-title">{villa.name}</h3>

          <div className="villa-specs">
            <span>Plot: {villa.plot} sq.ft</span>
            <span>Built: {villa.built} sq.ft</span>
          </div>

          <div className="villa-footer">
            <p className="villa-price">{villa.price}</p>

            <button className="villa-btn">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}