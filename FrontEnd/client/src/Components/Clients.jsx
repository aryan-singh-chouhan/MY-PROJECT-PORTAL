import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '../assets/Ellipse 28.svg'
import image2 from '../assets/Ellipse 29.svg'
import image3 from '../assets/Ellipse 31.svg'
import image4 from '../assets/Ellipse 33.svg'
import image5 from '../assets/Ellipse 35.svg'
const Clients = () => {
  const [client, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error('Error fetching client:', err));
  }, []);

const clients = [
    {
      id: 1,
      name: 'Ramesh Smith',
      designation: 'CEO, Real Home Inc.',
      imageUrl: image1,
      description: 'Flipr turned my property vision into reality with ease. Their design and marketing approach was impressive and result-oriented.',
      projectName: 'Urban Villa, Mumbai',
    },
    {
      id: 2,
      name: 'Shipra Kayak',
      designation: 'CTO, SpaceGrid',
      imageUrl: image2,
      description: 'Professional and creative team! The project was delivered on time and the transformation was beyond my expectations.',
      projectName: 'Modern Loft, Bangalore',
    },
    {
      id: 3,
      name: 'John Lapos',
      designation: 'COO, Skyline Group',
      imageUrl: image3,
      description: 'They handled everything from consultation to design and marketing. The result? My house sold 20% above market rate.',
      projectName: 'Skyline Heights, Pune',
    },
    {
      id: 4,
      name: 'Marry Freeman',
      designation: 'Marketing Strategist, NestPro',
      imageUrl: image4,
      description: 'Fantastic collaboration! Their consultation phase gave me full clarity. I highly recommend Flipr for any home improvement journey.',
      projectName: 'Serene Meadows, Noida',
    },
    {
      id: 5,
      name: 'Lucy',
      designation: 'Interior Architect, Self-Employed',
      imageUrl: image5,
      description: 'Loved the creative freedom and detail-oriented process. Flipr is the real deal when it comes to modern real estate support.',
      projectName: 'Palm Grove Villa, Hyderabad',
    },
  ];

  return (
    <section id="clients" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Happy Clients</h2>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                />
              </div>

              {/* Testimonial */}
              <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">
                {client.description}
              </p>

              {/* Name & Designation */}
              <p className="text-blue-600 font-semibold text-sm text-center">
                {client.name}
              </p>
              <p className="text-gray-500 text-xs text-center">
                {client.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
