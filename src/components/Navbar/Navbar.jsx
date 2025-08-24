import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { HiHome, HiUser, HiCode, HiBriefcase, HiAcademicCap } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");


  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About", icon: HiUser },
    { id: "skills", label: "Skills", icon: HiCode },
    { id: "experience", label: "Experience", icon: HiBriefcase },
    { id: "work", label: "Projects", icon: HiCode },
    { id: "education", label: "Education", icon: HiAcademicCap },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] backdrop-blur-none `}
    >
      <div className="text-white py-3 sm:py-4 md:py-5 flex justify-between items-center w-full max-w-full">
        {/* Logo */}
        <a href="/" className="text-base sm:text-lg font-semibold cursor-pointer select-none flex-shrink-0">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Zeeshan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mehdi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300 flex-shrink-0">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="px-2 py-1 rounded-md hover:bg-[#8245ec] hover:bg-opacity-10 transition-all duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 flex-shrink-0">
          <a
            href="https://github.com/ZeeshanMehdiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-2 rounded-md hover:bg-[#8245ec] hover:bg-opacity-10"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.fiverr.com/mehdi_92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-2 rounded-md hover:bg-[#8245ec] hover:bg-opacity-10"
          >
            <TbBrandFiverr size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/zeeshanmehdi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200 p-2 rounded-md hover:bg-[#8245ec] hover:bg-opacity-10"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mobile-menu-container flex-shrink-0 relative z-[60]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#8245ec] bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 group"
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <span className={`w-5 h-0.5 bg-[#8245ec] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`w-5 h-0.5 bg-[#8245ec] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-5 h-0.5 bg-[#8245ec] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[55] md:hidden" />
      )}

      {/* Mobile Menu - Slide Up Design */}
      <div className={`mobile-menu-container fixed bottom-0 left-0 w-full z-[60] transform transition-all duration-500 ease-out md:hidden ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* Mobile Menu Content */}
        <div className="bg-gradient-to-b from-[#050414] via-[#0a0a1a] to-[#050414] rounded-t-3xl shadow-2xl border-t border-[#8245ec] border-opacity-30">
          {/* Handle Bar */}
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
          </div>

          {/* Menu Header */}
          <div className="px-6 py-4 border-b border-gray-700 border-opacity-50">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-white">
                <span className="text-[#8245ec]">&lt;</span>
                <span className="text-white">Zeeshan</span>
                <span className="text-[#8245ec]">/</span>
                <span className="text-white">Mehdi</span>
                <span className="text-[#8245ec]">&gt;</span>
              </div>
              <div className="text-sm text-gray-400">
                Software Engineer
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`group relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? "bg-[#8245ec] bg-opacity-20 border-2 border-[#8245ec] border-opacity-50"
                        : "bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:bg-opacity-70"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`p-3 rounded-full transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-[#8245ec] text-white"
                          : "bg-gray-700 text-gray-300 group-hover:bg-[#8245ec] group-hover:text-white"
                      }`}>
                        <IconComponent size={24} />
                      </div>
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-[#8245ec]"
                          : "text-gray-300 group-hover:text-white"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="px-6 py-6 border-t border-gray-700 border-opacity-50">
            <div className="text-center mb-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Connect With Me</h3>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/ZeeshanMehdiDev"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-[#8245ec] hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} className="text-gray-300 group-hover:text-[#8245ec] transition-colors duration-300" />
              </a>
              <a
                href="https://www.fiverr.com/mehdi_92"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-[#8245ec] hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
              >
                <TbBrandFiverr size={24} className="text-gray-300 group-hover:text-[#8245ec] transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/zeeshanmehdi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-800 bg-opacity-50 hover:bg-[#8245ec] hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} className="text-gray-300 group-hover:text-[#8245ec] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 text-center border-t border-gray-700 border-opacity-50">
            <p className="text-xs text-gray-500">
              © 2024 Zeeshan Mehdi. Crafted with ❤️
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
