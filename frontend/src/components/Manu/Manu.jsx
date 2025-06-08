import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Manu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Logo */}
         

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-orange-500">Home</a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-white hover:text-orange-500 cursor-pointer"
              >
                Services <ChevronDown size={18} className="ml-1 text-white" />
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-md z-20 w-50">
                  <a href="#" className="block px-4 py-4 hover:bg-orange-100">Web Design</a>
                  <a href="#" className="block px-4 py-4 hover:bg-orange-100">SEO</a>
                  <a href="#" className="block px-4 py-4 hover:bg-orange-100">Marketing</a>
                </div>
              )}
            </div>
            <a href="#" className="text-white hover:text-orange-500">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-white">Home</a>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full text-left text-white"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="ml-4 space-y-1">
              <a href="#" className="block text-white">Web Design</a>
              <a href="#" className="block text-white">SEO</a>
              <a href="#" className="block text-white">Marketing</a>
            </div>
          )}
          <a href="#" className="block text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Manu;
