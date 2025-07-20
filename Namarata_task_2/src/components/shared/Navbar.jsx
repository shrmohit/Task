import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/mainlogo.gif";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 shadow-md text-black backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Jingle Holiday Bazar" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow">
            Jingle Holiday Bazar
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          {["Home", "About", "Domestic", "International", "Place", "Package", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-yellow-200 transition duration-200"
            >
              {item}
            </a>
          ))}
          <span className="font-bold text-yellow-200 ml-4">+91-8506922777</span>
        </div>

        <div className="hidden md:block">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md transition duration-300">
            PAY NOW
          </button>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-300 to-blue-500 px-6 py-4 space-y-3 shadow-md text-white">
          {["Home", "About", "Domestic", "International", "Place", "Package", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-medium text-base hover:text-yellow-200 transition"
            >
              {item}
            </a>
          ))}
          <span className="block font-bold text-yellow-200 mt-2">+91-8506922777</span>
          <button className="mt-4 bg-yellow-400 w-full py-2 rounded-full font-semibold text-black hover:bg-yellow-500 transition">
            PAY NOW
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
