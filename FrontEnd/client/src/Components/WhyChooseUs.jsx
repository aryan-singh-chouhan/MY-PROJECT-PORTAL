// src/components/WhyChooseUs.jsx

import React from 'react';
import { FaHome, FaUsers, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaHome className="text-3xl text-blue-600" />,
    title: 'Strategic Planning',
    description: 'We create a step-by-step plan to meet your unique property goals.',
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: 'Client-Focused',
    description: 'Your satisfaction is our priority. We tailor everything to your needs.',
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600" />,
    title: 'Creative Marketing',
    description: 'Our team uses modern marketing strategies that deliver visible results.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
