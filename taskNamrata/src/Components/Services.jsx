import React from 'react'
import { FaBowlRice, FaTruckMoving, FaMedal, FaSun } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-20 text-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-4xl font-semibold text-red-700 uppercase mb-4">Why Choose Us</p>
        <h2 className="text-xl md:text-5xl font-extrabold mb-6">
          Leave Your Guests Speechless With Our Fabulous Food!
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-700 mb-14 max-w-3xl mx-auto">
          We are a full-service catering company that specializes in creating custom menus that are tailored to your
          specific needs and budget. Our team of professionals will work with you to create a menu that is perfect for
          your event.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <FaBowlRice className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-1">Authentic Taste</h3>
            <p className="text-sm text-gray-600">
              Enjoy our traditional recipes, inspired by rich culinary heritage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <FaTruckMoving className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-1">Service Excellence</h3>
            <p className="text-sm text-gray-600">
              Outstanding service and unforgettable experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <FaMedal className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-1">Best Quality</h3>
            <p className="text-sm text-gray-600">
              Top quality standards, excellence in every bite.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <FaSun className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-1">Heritage</h3>
            <p className="text-sm text-gray-600">
              Taj Taazagi Catters blends food and heart, rooted in family traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services