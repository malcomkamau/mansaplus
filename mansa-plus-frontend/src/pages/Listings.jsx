import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Modern Villa in Nairobi',
    price: '$250,000',
    location: 'Karen, Nairobi',
    image: '/property1.jpeg',
  },
  {
    id: 2,
    title: 'Beachfront Condo',
    price: '$180,000',
    location: 'Diani Beach',
    image: '/property2.jpeg',
  },
  {
    id: 3,
    title: 'City Apartment',
    price: '$90,000',
    location: 'Westlands, Nairobi',
    image: '/property3.jpeg',
  },
  {
    id: 4,
    title: 'Mountain Cabin Retreat',
    price: '$130,000',
    location: 'Mt. Kenya',
    image: '/property4.jpeg',
  },
];

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">All Property Listings</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-52 object-cover" />
                <div className="p-5 text-gray-900">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-blue-700 font-bold mt-2">{property.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
