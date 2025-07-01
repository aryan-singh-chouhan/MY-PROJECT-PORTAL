// src/components/Hero.jsx

import React, { useState } from 'react';
import heroImage from '../assets/hero.svg';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    area: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="home"
      className="w-full bg-cover bg-center py-20 px-6 md:px-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Consultation,<br /> Design,<br /> & Marketing
          </h1>
          <p className="mt-4 text-lg font-light">
            Get expert real estate consultation and marketing guidance tailored to your goals.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Get a Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="area"
              placeholder="Area/City"
              required
              value={formData.area}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Get Started Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
