import React from "react";
import image1 from "../assets/Leh03.webp"
import image2 from "../assets/Solang-Valley.webp"

const FeaturedTours = () => {
  return (
    <div className="bg-blue-50 py-12 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          FEATURED TOURS IN INDIA
        </h2>
        <p className="text-lg italic text-gray-700">
          India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh largest tourist nation by area and the second largest in terms of population
        </p>
      </div>

      {/* Tours Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image 1 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={image1}
            alt="Amritsar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Image + Text */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img
              src={image2}
              alt="Solang Valley"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-blue-600 leading-snug mb-3">
              Week At Solang Valley, <br /> Manali
            </h3>
            <p className="text-gray-800 italic text-[17px] mb-4">
              A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit.
            </p>
            <a href="#" className="text-blue-600 font-medium italic underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
