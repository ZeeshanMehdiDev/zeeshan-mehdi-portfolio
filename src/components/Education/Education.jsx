import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Educational Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my academic background, showcasing my commitment 
          to continuous learning and professional development
        </p>
      </div>

      {/* Education Cards Container */}
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="group relative"
          >
            {/* Timeline Connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8245ec] via-[#a855f7] to-transparent"></div>
            
            {/* Timeline Dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full border-4 border-gray-900 shadow-lg"></div>

            {/* Education Card */}
            <div className="ml-16 relative">
              {/* Card Background with Gradient Border */}
              <div className="relative p-8 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-2xl hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#8245ec]/30">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8245ec]/20 via-[#a855f7]/20 to-[#8245ec]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div className="flex items-start space-x-6 mb-6 md:mb-0">
                      {/* Institution Logo */}
                      <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-lg flex-shrink-0">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Degree and Institution Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg text-[#8245ec] font-semibold">
                            {edu.school}
                          </h4>
                          <span className="w-2 h-2 bg-[#8245ec] rounded-full"></span>
                          <span className="text-gray-400 font-medium">
                            {edu.date}
                          </span>
                        </div>
                        {/* Grade Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8245ec]/20 to-[#a855f7]/20 text-[#8245ec] rounded-lg border border-[#8245ec]/30">
                          <span className="w-2 h-2 bg-[#8245ec] rounded-full mr-2"></span>
                          <span className="font-semibold">Grade: {edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold text-lg mb-4 flex items-center">
                      <span className="w-2 h-2 bg-[#8245ec] rounded-full mr-3"></span>
                      Program Overview
                    </h5>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>

                  {/* Academic Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-800">
                    <div className="text-center p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-[#8245ec] mb-1">
                        {edu.degree.includes('Bachelor') ? '4' : '2'}
                      </div>
                      <div className="text-gray-400 text-sm">Years Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-[#8245ec] mb-1">
                        {edu.degree.includes('Bachelor') ? 'Computer Science' : 'Science'}
                      </div>
                      <div className="text-gray-400 text-sm">Field of Study</div>
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

export default Education;
