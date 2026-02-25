import { getProperties } from '../../services/dataService';
import PropertyCard from '../property/PropertyCard';

export default function VillaShowcase() {
  const villas = getProperties();
  return (
    <section className="section">
      <h2>Our Villas</h2>
      <div className="cards">
        {villas.map(v => <PropertyCard key={v.id} villa={v} />)}
      </div>
    </section>
  );
}
