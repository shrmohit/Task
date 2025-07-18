import React from 'react'
import { FaUtensils, FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section className="w-full px-4 py-12 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}

        <h4 className='text-center font-bold text-3xl mb-4 text-red-700'>About</h4>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Elevating Your Events <br className="hidden md:block" />
          with Exceptional Food.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-10 text-gray-700">
          <span className="font-semibold">Taj Taazagi Catters</span> is The Place where Food is Celebrated over 25 Years.
          <br />We Love to Create Unforgettable Culinary Experiences.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FaUtensils className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">25 Years of Experience</h3>
          </div>
          <div className="bg-white border rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FaHandHoldingHeart className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">2000+ Successful Marriages</h3>
          </div>
          <div className="bg-white border rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FaHandHoldingUsd className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">98% Repeated Customers</h3>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-red-600 hover:bg-red-800 rounded-full text-lg font-semibold transition"
        >
          More About Us
          <FiArrowUpRight className="text-xl" />
        </a>
      </div>
    </section>
  )
}

export default About