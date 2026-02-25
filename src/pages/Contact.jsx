export default function Contact() {
  return (
    <div className="section">
      <h1>Contact Us</h1>
      <p>Book a private visit or get complete details about Avacasa villas.</p>
      <div className="contact-grid">
        <div><h3>Location</h3><p>Delhi–Dehradun Expressway</p><p>Saharanpur Region, UP</p></div>
        <div><h3>Call Us</h3><p>+91 9876543210</p></div>
        <div><h3>Email</h3><p>info@avacasa.com</p></div>
      </div>
      <h2>Schedule a Visit</h2>
      <form className="form">
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>
        <button className="cta">Book Site Visit</button>
      </form>
    </div>
  );
}
