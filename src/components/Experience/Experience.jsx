import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A journey through my professional growth, showcasing diverse roles and 
          contributions across various organizations
        </p>
      </div>

      {/* Experience Cards Container */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="group relative"
          >
            {/* Timeline Connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8245ec] via-[#a855f7] to-transparent"></div>
            
            {/* Timeline Dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full border-4 border-gray-900 shadow-lg"></div>

            {/* Experience Card */}
            <div className="ml-16 relative">
              {/* Card Background with Gradient Border */}
              <div className="relative p-8 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-2xl hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#8245ec]/30">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8245ec]/20 via-[#a855f7]/20 to-[#8245ec]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      {/* Company Logo */}
                      <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Role and Company Info */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {experience.role}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <h4 className="text-lg text-[#8245ec] font-semibold">
                            {experience.company}
                          </h4>
                          <span className="w-2 h-2 bg-[#8245ec] rounded-full"></span>
                          <span className="text-gray-400 font-medium">
                            {experience.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {experience.desc}
                    </p>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h5 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <span className="w-2 h-2 bg-[#8245ec] rounded-full mr-3"></span>
                      Technologies & Skills
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gray-800/60 text-[#8245ec] text-sm font-medium rounded-lg border border-gray-700 hover:border-[#8245ec]/50 hover:bg-gray-800/80 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="mt-20"></div>
    </section>
  );
};

export default Experience;
