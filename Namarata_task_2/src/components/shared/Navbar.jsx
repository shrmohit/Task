import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/mainlogo.gif";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed top-0 w-full z-50 bg-yellow-400 shadow-md text-black">
      <div className="w-full max-w-7xl mx-auto  flex items-center justify-evenly py-5">

        {/* Logo + Brand */}
        <div className="flex items-center px-2 space-x-2">
          <img src={Logo} alt="Taj Taazagi" className="w-12 h-12 rounded-full" />
          <span className="text-2xl font-bold text-red-600 ">Jingle Holiday Bazar</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8 ">
          {["Home", "About", "Domestic", "International", "Place", "Package", "Contact Us", "+91-8506922777"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-semibold text-lg hover:text-red-600 hover:underline transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Pay Now Button - Desktop */}
        <div className=" ml-4 hidden md:block ">
          <button className="bg-red-600 px-5 py-2 rounded-full font-semibold text-yellow-50 hover:bg-red-700 transition">
            PAY NOW
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-yellow-300 px-6 py-4 space-y-3">
          {["Home", "About", "Services", "Menu", "Gallery", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-semibold text-base hover:text-red-600 hover:underline"
            >
              {item}
            </a>
          ))}
          <button className="mt-4 bg-red-600 w-full py-2 rounded-full font-semibold text-yellow-50 hover:bg-red-700 transition">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
