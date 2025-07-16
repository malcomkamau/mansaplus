import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-md w-full text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page not found</p>
        <Link
          to="/"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
