import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 text-white">Jingle Holiday Bazar</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your trusted travel companion. We help you plan unforgettable holidays with expert-curated packages, affordable deals, and 24/7 support.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-red-400 transition">Holiday Packages</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Flight Booking</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Hotel Booking</a></li>
            <li><a href="#" className="hover:text-red-400 transition">International Tours</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Visa Assistance</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="mt-1 text-lg" />
              <span>203, Vishwadeep Tower, District Centre, Janakpuri, New Delhi – 110058</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-base" />
              <a href="tel:+911145732900" className="hover:text-red-400">+91 11 4573 2900</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <a href="mailto:info@jingleholidaybazar.com" className="hover:text-red-400">
                info@jingleholidaybazar.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-5 text-white">
            <a href="#" className="hover:text-red-400 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-red-400 text-xl"><FaLinkedinIn /></a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Follow us for latest holiday deals and travel inspiration!
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Jingle Holiday Bazar Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
