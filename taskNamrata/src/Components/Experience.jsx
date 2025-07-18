import React from "react";
import { FaUtensils, FaHeart, FaRedo } from "react-icons/fa";

const experiences = [
  {
    icon: <FaUtensils className="text-4xl text-[#E58F00]" />,
    title: "25 Years of Experience",
  },
  {
    icon: <FaHeart className="text-4xl text-[#E58F00]" />,
    title: "2000+ Successful Marriages",
  },
  {
    icon: <FaRedo className="text-4xl text-[#E58F00]" />,
    title: "98% Repeated Customers",
  },
];

const Experience = () => {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-red-600 mb-4 leading-tight ">
        Experience
        </h2>
        <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">
          Taj Taazagi Catters is The Place where Food is Celebrated over 25 Years.
          We Love to Create Unforgettable Culinary Experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-transparent group-hover:border-[#E58F00] pb-1 transition-all">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Experience;
