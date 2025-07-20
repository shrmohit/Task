import React from "react";
import { FaHome, FaBed, FaPlane } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHome size={40} />,
      title: "Jingle Holiday Bazar Homestays",
      subtitle: "Book Villas, Apartments and Resorts",
      description:
        "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer...",
    },
    {
      icon: <FaBed size={40} />,
      title: "Jingle Holiday Bazar Hotels",
      subtitle: "Book Hotels with Jingle Holiday Bazar.com",
      description:
        "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online...",
    },
    {
      icon: <FaPlane size={40} />,
      title: "Jingle Holiday Bazar Flights",
      subtitle: "Why book Flights Online with Jingle Holiday Bazar.com",
      description:
        "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or leisure, you cannot make an itinerary until you have booked your flights. Procuring an air ticket is a mandatory first step...",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg italic mb-12 max-w-3xl mx-auto">
          At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-md font-medium text-gray-600 mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-500 text-sm mb-10">
                  {service.description}
                </p>
                <button className="absolute bottom-6 bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-red-600 hover:to-orange-500 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
