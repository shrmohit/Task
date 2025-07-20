import React from "react";
import baliImage from "../assets/bali.webp";
import bangkokImage from "../assets/Bangkok.jpeg";
import DubaiImage from "../assets/Dubai.jpeg";
import london from "../assets/london.jpeg";
import NewYorkCity from "../assets/Newyorkcity.jpeg";
import paris from "../assets/paris.webp";

const destinations = [
  { image: baliImage, name: "Bali" },
  { image: bangkokImage, name: "Bangkok" },
  { image: DubaiImage, name: "Dubai" },
  { image: london, name: "London" },
  { image: NewYorkCity, name: "New York City" },
  { image: paris, name: "Paris" },
];

const PopularDestinationInInternational = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Popular Destinations in World
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationInInternational;
