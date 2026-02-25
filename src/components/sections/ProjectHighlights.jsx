import SectionReveal from "../ui/SectionReveal";
import bg from "../../assets/project/hero.jpg";

export default function ProjectHighlights() {
  const highlights = [
    "50+ Luxury Villas",
    "Private Pools",
    "Gated Farm Community",
    "Nature Inspired Living",
    "Modern Architecture",
    "Premium Landscape Design",
  ];

  return (
    <section className="section-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <SectionReveal>
          <div className="container glass-card">
            <h2 className="section-title">Project Highlights</h2>

            <div className="grid-3">
              {highlights.map((item, i) => (
                <div key={i} className="highlight-item">
                  ✦ {item}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}