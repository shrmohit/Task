import React from 'react';
import hotel from "../assets/Hotel.webp"
import hotel2 from "../assets/hotel1.webp"

const PopularHotel = () => {
  return (
    <div className="bg-[#e8f1fa] py-10 px-6 md:px-16">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
          Popular Hotels
        </h2>
        <p className="text-lg italic text-gray-600 mt-2">
          At Jingle Holiday Bazar Provide Best Hotel Facility National And International
        </p>
      </div>

     
      <div className="grid md:grid-cols-2 gap-6 items-center">
        
        <img
          src={hotel}
          alt="Taj Aravali Resort"
          className="w-full h-auto rounded-xl shadow-lg"
        />

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Taj Aravali Resort & Spa
            </h3>
            <p className="italic text-gray-700 text-lg leading-relaxed">
              Prices for Taj Aravali Resort and Spa, one of the best hotels in India, starts at <span className="font-semibold">₹ 12999+</span> per night
            </p>
          </div>

          
          <img
            src={hotel2}
            alt="Resort View"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularHotel;
