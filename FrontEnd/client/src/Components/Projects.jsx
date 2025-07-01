// src/components/Projects.jsx

import React from 'react';
import consultationImg from '../assets/image (1).svg';
import designImg from '../assets/image (2).svg';
import marketingDesignImg from '../assets/image (3).svg';
import consultationMarketingImg from '../assets/image (4).svg';
import consultationTeamImg from '../assets/image (5).svg';

const projectData = [
  {
    name: 'Consultation',
    location: 'Project Name, Location',
    image: consultationImg,
  },
  {
    name: 'Design',
    location: 'Project Name, Location',
    image: designImg,
  },
  {
    name: 'Marketing & Design',
    location: 'Project Name, Location',
    image: marketingDesignImg,
  },
  {
    name: 'Consultation & Marketing',
    location: 'Project Name, Location',
    image: consultationMarketingImg,
  },
  {
    name: 'Consultation',
    location: 'Project Name, Location',
    image: consultationTeamImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-blue-600 font-semibold text-md mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
