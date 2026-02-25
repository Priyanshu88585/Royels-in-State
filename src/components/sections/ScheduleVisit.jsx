import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ScheduleVisit() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_k6rj4if",     // ✅ your service id added
        "YOUR_TEMPLATE_ID",    // ⚠️ replace this
        formRef.current,
        "YOUR_PUBLIC_KEY"      // ⚠️ replace this
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <section className="section">
      <h2 className="section-title">Schedule a Visit</h2>

      <form ref={formRef} onSubmit={sendEmail} className="form glass-card">

        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          required
        />

        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
        />

        <button className="cta" disabled={loading}>
          {loading ? "Sending..." : "Book Visit"}
        </button>

        {success && (
          <p style={{ color: "#d4af37", marginTop: "10px" }}>
            ✅ Visit request sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}