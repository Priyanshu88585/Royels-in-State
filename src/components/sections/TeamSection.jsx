import "./team.css";

export default function TeamSection() {
  const team = [
    {
      name: "Praveen Gupta",
      role: "Co-founder & Director",
      img: "/src/assets/project/team1.png",
      bio: "Visionary leader focused on premium eco-luxury villa development.",
    },
    {
      name: "Himanshu Tyagi",
      role: "Co-founder & Director",
      img: "/src/assets/project/team2.png",
      bio: "Expert in real estate strategy and high-value property investments.",
    },
  ];

  return (
    <section className="section team-section">
      <h2 className="section-title">Leadership</h2>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            {/* profile image */}
            <div className="team-img-wrap">
              <img src={member.img} alt={member.name} />
            </div>

            {/* info */}
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>

            {/* social icons */}
            <div className="social-row">
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}