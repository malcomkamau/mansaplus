import { Link } from 'react-router-dom';

export default function FeaturedListings() {
  const properties = [
    { id: 1, title: 'Modern Villa in Nairobi', location: 'Karen', price: '$250,000', image: '/property1.jpeg' },
    { id: 2, title: 'Beachfront Condo', location: 'Diani', price: '$180,000', image: '/property2.jpeg' },
    { id: 3, title: 'City Apartment', location: 'Westlands', price: '$90,000', image: '/property3.jpeg' },
  ];

  return (
    <section id="listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Listings</h3>
        <div className="grid gap-10 md:grid-cols-3">
          {properties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-gray-900">
                  <h4 className="text-xl font-bold">{property.title}</h4>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-blue-700 font-semibold mt-2">{property.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
