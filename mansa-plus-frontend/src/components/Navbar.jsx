export default function Navbar() {
  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Mansa Plus</h1>
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li><a href="/listings" className="hover:text-blue-600">All Listings</a></li>
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
