import React from 'react';
import img1 from '../assets/team.svg';  // Replace with your actual filenames
import img2 from '../assets/image (1).svg';
import img3 from '../assets/image (5).svg';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Floating Images Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 relative">
          <div className="relative">
            <img src={img1} alt="Visual 1" className="w-48 h-60 object-cover rounded-lg shadow-md" />
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-500 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <img src={img2} alt="Visual 2" className="w-56 h-72 object-cover rounded-lg shadow-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-600 rounded-sm"></div>
          </div>

          <div className="relative">
            <img src={img3} alt="Visual 3" className="w-48 h-60 object-cover rounded-lg shadow-md" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-sm"></div>
          </div>
        </div>

        {/* About Text */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          Fifteen years of experience in real estate, excellent customer service and a
          commitment to work hard, listen and follow through. We provide quality services to
          build relationships with clients and, more importantly, maintain those relationships
          by communicating effectively.
        </p>
        <a
          href="#contact"
          className="inline-block border border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
