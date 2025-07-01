import React from 'react';
import img1 from '../assets/Ellipse 11.svg';  // Update if needed
import img2 from '../assets/Ellipse 12.svg';
import img3 from '../assets/Ellipse 13.svg';

const IntroRealtor = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Not Your Average Realtor</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Flipr, we redefine real estate by blending creative design, effective strategy, and deep client understanding. Our professionals don’t just sell spaces — they craft experiences tailored to your lifestyle and aspirations.
          </p>
        </div>

        {/* Right: Overlapping Circle Images */}
        <div className="relative w-full h-[420px] flex items-center justify-center">
          {/* Left Image */}
          <img
            src={img1}
            alt="Person 1"
            className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md absolute top-10 left-0 md:left-12"
          />

          {/* Right Image */}
          <img
            src={img2}
            alt="Person 2"
            className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md absolute bottom-10 right-0 md:right-12"
          />

          {/* Center Image (larger and above others) */}
          <img
            src={img3}
            alt="Person 3"
            className="w-52 h-52 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroRealtor;
