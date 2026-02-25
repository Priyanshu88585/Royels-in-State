import { getProperties } from '../services/dataService';
import PropertyCard from '../components/property/PropertyCard';

export default function Listings() {
  const villas = getProperties();
  return (
    <div className="section">
      <h1>Our Villas</h1>
      <div className="cards">
        {villas.map(v => <PropertyCard key={v.id} villa={v} />)}
      </div>
    </div>
  );
}
