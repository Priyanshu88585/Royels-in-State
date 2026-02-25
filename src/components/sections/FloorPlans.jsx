import SectionReveal from "../ui/SectionReveal";
import bg from "../../assets/project/masterplan.jpg";

export default function FloorPlans() {
  const plans = [
    { title: "3 BHK Villa", size: "1800 sq.ft" },
    { title: "4 BHK Villa", size: "2400 sq.ft" },
    { title: "5 BHK Luxury Villa", size: "3200 sq.ft" },
  ];

  return (
    <section className="section-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <SectionReveal>
          <div className="container glass-card">
            <h2 className="section-title">Floor Plans</h2>

            <div className="grid-3">
              {plans.map((plan, i) => (
                <div key={i} className="plan-card">
                  <h3>{plan.title}</h3>
                  <p>{plan.size}</p>
                  <button className="btn-gold">View Plan</button>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}