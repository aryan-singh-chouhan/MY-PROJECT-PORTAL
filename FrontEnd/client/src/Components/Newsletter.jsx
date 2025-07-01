import React, { useState } from 'react';
import rectangleBg from '../assets/Rectangle.svg'; // Update if your file name differs

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('http://localhost:5000/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      className="relative bg-cover bg-center py-24 px-6 text-white"
      style={{
        backgroundImage: `url(${rectangleBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8 text-white/90 text-base md:text-lg">
          Subscribe to our newsletter to receive the latest updates and project news from Flipr.
        </p>

        {/* Form Container with Light Background */}
        <form
          onSubmit={handleSubscribe}
          className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex flex-col sm:flex-row gap-4 justify-center items-center shadow-md max-w-2xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="px-4 py-3 rounded w-full sm:w-96 text-black outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-200 text-sm">You are subscribed!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-200 text-sm">Failed to subscribe. Try again later.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
