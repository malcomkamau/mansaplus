export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex justify-center items-center px-4 py-24">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-xl w-full text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/70 outline-none border border-white/30 focus:border-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/70 outline-none border border-white/30 focus:border-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              className="w-full h-32 px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/70 outline-none border border-white/30 focus:border-white resize-none"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/80">
          Or email us at <a href="mailto:info@mansaplus.com" className="underline">info@mansaplus.com</a>
        </div>
      </div>
    </div>
  );
}
