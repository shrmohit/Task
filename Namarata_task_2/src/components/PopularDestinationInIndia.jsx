import React from "react";
import amritsarImage from "../assets/JallianwalaBagh.webp";
import gangtokImage from "../assets/Gangtok.webp";
import tajMahalImage from "../assets/Taj-mahal.webp";
import redFort from "../assets/Taj-mahal.webp";
import varanasi from "../assets/varanasi.jpg";
import kedarnath from "../assets/kedarnath-dham.webp";

const destinations = [
  { image: amritsarImage, name: "Amritsar, Punjab" },
  { image: gangtokImage, name: "Gangtok, Sikkim" },
  { image: tajMahalImage, name: "Agra, Uttar Pradesh" },
  { image: redFort, name: "Red Fort, Delhi" },
  { image: varanasi, name: "Varanasi, Uttar Pradesh" },
  { image: kedarnath, name: "Kedarnath, Uttarakhand" },
];

const PopularDestinationInIndia = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Popular Destinations in India
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

export default PopularDestinationInIndia;
