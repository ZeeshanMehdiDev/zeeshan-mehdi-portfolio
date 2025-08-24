import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Filter categories - All, Medusa JS, Mobile App
  const uniqueCategories = ["All", "Medusa JS", "Mobile App"];

  // Filter projects based on selected category
  const filteredProjects = (() => {
    switch (activeFilter) {
      case "All":
        return projects;
      case "Medusa JS":
        return projects.filter(project => 
          project.tags.some(tag =>
            tag.toLowerCase().includes('medusa') ||
            tag.toLowerCase().includes('medusajs')
          )
        );
      case "Mobile App":
        return projects.filter(project => 
          project.tags.some(tag =>
            tag.toLowerCase().includes('reactnative') ||
            tag.toLowerCase().includes('kotlin') ||
            tag.toLowerCase().includes('android') ||
            tag.toLowerCase().includes('expo')
          )
        );
      default:
        return projects;
    }
  })();

  return (
    <section
      id="work"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A showcase of my technical expertise through diverse projects,
          demonstrating problem-solving skills and innovative solutions
        </p>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                ? "bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white shadow-lg shadow-[#8245ec]/25"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#8245ec]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with project type indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#8245ec] text-white text-xs font-semibold rounded-full">
                  {project.tags.includes('ReactNative') || project.tags.includes('Kotlin') ? 'Mobile App' : 'Web App'}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8245ec] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/60 text-[#8245ec] text-xs font-medium rounded-lg border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-3 py-1 bg-gray-800/60 text-gray-500 text-xs font-medium rounded-lg border border-gray-700">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="flex-1 bg-gray-800/60 hover:bg-[#8245ec] text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-[#8245ec]"
                >
                  View Details
                </button>
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#8245ec]/25 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500 text-lg">
            No projects found for "{activeFilter}". Try selecting a different category.
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-bold hover:text-[#8245ec] transition-colors duration-300"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-80 bg-gray-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-[#8245ec] text-white text-sm font-semibold rounded-full">
                      {selectedProject.tags.includes('ReactNative') ? 'Mobile App' : 'Web App'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#8245ec] rounded-full mr-3"></span>
                    Project Overview
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#8245ec] rounded-full mr-3"></span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800/60 text-[#8245ec] text-sm font-medium rounded-lg border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-[#8245ec]/25 transition-all duration-300"
                    >
                      🚀 View Live Demo
                    </a>
                  )}
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-800/60 hover:bg-gray-700 text-gray-300 hover:text-white py-3 px-6 rounded-lg font-semibold border border-gray-700 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
