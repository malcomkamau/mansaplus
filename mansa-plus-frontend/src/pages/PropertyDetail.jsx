import { useParams } from 'react-router-dom';

const mockPropertyData = {
  1: {
    title: 'Modern Villa in Nairobi',
    location: 'Karen, Nairobi',
    price: '$250,000',
    description:
      'A luxurious villa with modern architecture, spacious gardens, and smart home features. Perfect for families or investors.',
    image: '/property1.jpeg',
    features: ['4 Bedrooms', '3 Bathrooms', '2 Garages', 'Smart Security', 'Large Garden'],
  },
  2: {
    title: 'Beachfront Condo',
    location: 'Diani Beach',
    price: '$180,000',
    description:
      'Wake up to ocean views in this beautiful condo right on the beach. Modern interior with private balcony.',
    image: '/property2.jpeg',
    features: ['2 Bedrooms', '2 Bathrooms', 'Ocean View', 'Private Balcony', 'Secure Gated Entry'],
  },
  // Add more mock data as needed
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = mockPropertyData[id];

  if (!property) {
    return <div className="text-center mt-20 text-xl">Property not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">{property.title}</h2>
          <p className="text-gray-600 mb-1">{property.location}</p>
          <p className="text-2xl text-blue-600 font-semibold mb-4">{property.price}</p>
          <p className="text-gray-700 mb-6">{property.description}</p>

          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {property.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}
