import { useState } from 'react';
import { getFAQ } from '../../services/dataService';

export default function FAQ() {
  const faq = getFAQ();
  const [open, setOpen] = useState(null);
  return (
    <section className="section glass">
      <h2>FAQ</h2>
      {faq.map((f, i) => (
        <div key={i} className="faq-item">
          <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>{f.q}</div>
          {open === i && <div className="faq-a">{f.a}</div>}
        </div>
      ))}
    </section>
  );
}
