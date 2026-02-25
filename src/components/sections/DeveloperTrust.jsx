import SectionReveal from "../ui/SectionReveal";
import bg from "../../assets/project/hero.jpg";

export default function DeveloperTrust() {
  const stats = [
    { label: "Projects Delivered", value: "25+" },
    { label: "Years Experience", value: "15+" },
    { label: "Happy Families", value: "1200+" },
    { label: "Awards Won", value: "10+" },
  ];

  return (
    <section className="section-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <SectionReveal>
          <div className="container glass-card">
            <h2 className="section-title">Trusted Developer</h2>

            <div className="grid-4">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <h2>{s.value}</h2>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}