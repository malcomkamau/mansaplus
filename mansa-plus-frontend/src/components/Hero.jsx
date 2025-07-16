export default function Hero() {
  return (
    <section className="h-screen bg-[url('/hero.jpeg')] bg-cover bg-center flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Discover Your Dream Property</h2>
        <p className="text-lg mb-6">Find the perfect home, investment, or getaway through Mansa Plus.</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold">
          Explore Listings
        </button>
      </div>
    </section>
  );
}
