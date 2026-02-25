import { useParams } from 'react-router-dom';
import { getProperties } from '../services/dataService';
import GallerySlider from '../components/property/GallerySlider';

export default function PropertyDetails() {
  const { id } = useParams();
  const villa = getProperties().find(v => v.id == id);

  if(!villa) return <div className="section"><h2>Property not found</h2></div>;

  return (
    <div className="section">
      <h1>{villa.name}</h1>
      <GallerySlider images={villa.images} />
      <h3>Plot Size: {villa.plot} sq.ft</h3>
      <h3>Built-up Area: {villa.built} sq.ft</h3>
      <h2>Features</h2>
      <ul>
        <li>Double Height Living Room</li>
        <li>Designer Open Kitchen</li>
        <li>3 Bedrooms with Attached Bathrooms</li>
        <li>Luxury Master Bathroom with Skylight</li>
        <li>Private Plunge Pool</li>
        <li>Outdoor Open-Air Shower</li>
        <li>Manicured Front Lawn & Backyard</li>
        <li>Kitchen Garden</li>
        <li>Dedicated 2-Car Parking</li>
      </ul>
      <button className="cta">Enquire Now</button>
    </div>
  );
}
