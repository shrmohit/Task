import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-[#161D29] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Taj Taazagi</h2>
          <p className="text-sm text-gray-400">
            Elevating your events with delicious food and timeless hospitality. Over 25 years of unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">About</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Menu</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="text-lg mt-1" />
              <span>123 Celebration Street, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <a href="tel:+911234567890" className="hover:text-red-500">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-sm" />
              <a href="mailto:info@tajtaazagi.com" className="hover:text-red-500">info@tajtaazagi.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-red-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Taj Taazagi Catters. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
