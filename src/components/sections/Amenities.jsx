import SectionReveal from "../ui/SectionReveal";
import bg from "../../assets/project/clubhouse.jpg";

export default function Amenities() {
  const amenities = [
    "Infinity Swimming Pool",
    "Modern Gymnasium",
    "Kids Play Area",
    "Jogging Track",
    "Clubhouse & Lounge",
    "24/7 CCTV Security",
  ];

  return (
    <section className="section-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <SectionReveal>
          <div className="container glass-card">
            <h2 className="section-title">Luxury Amenities</h2>

            <div className="grid-3">
              {amenities.map((item, i) => (
                <div key={i} className="amenity-item">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}