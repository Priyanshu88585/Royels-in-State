import SectionReveal from "../ui/SectionReveal";
import bg from "../../assets/project/team.jpg";

export default function PricingPlans() {
  const pricing = [
    {
      title: "Standard Villa",
      price: "₹85 Lakhs",
      desc: "3 BHK Villa with modern features",
    },
    {
      title: "Premium Villa",
      price: "₹1.2 Cr",
      desc: "4 BHK villa with private pool",
    },
    {
      title: "Ultra Luxury",
      price: "₹2 Cr+",
      desc: "5 BHK villa with landscape garden",
    },
  ];

  return (
    <section className="section-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <SectionReveal>
          <div className="container glass-card">
            <h2 className="section-title">Pricing Plans</h2>

            <div className="grid-3">
              {pricing.map((item, i) => (
                <div key={i} className="pricing-card">
                  <h3>{item.title}</h3>
                  <h2 className="price">{item.price}</h2>
                  <p>{item.desc}</p>
                  <button className="btn-gold">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}