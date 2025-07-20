import React, { useState } from "react";
import Bangalore from "../assets/Bangalore-Karnataka-1.webp";
import Coorg from "../assets/Coorg-1.webp";
import Chennai from "../assets/Chennai-1.webp";
import Gokarna from "../assets/Gokarna-1.webp";
import Delhi from "../assets/red_fort.avif";
import Manali from "../assets/Gokarna-1.webp";
import Jaipur from "../assets/Chennai-1.webp";
import Agra from "../assets/Taj-mahal.webp";
import Darjeeling from "../assets/Goa-beaches.webp";
import Puri from "../assets/Bangalore-Karnataka-1.webp";
import Shillong from "../assets/Chennai-1.webp";
import Gangtok from "../assets/Gokarna-1.webp";
import Mumbai from "../assets/panchghani.webp";
import Goa from "../assets/mahabaleshwar.webp";
import Udaipur from "../assets/2021006-1895800595.webp";
import Rann from "../assets/Goa-beaches.webp";

const GallerySection = () => {
  const [selectedTab, setSelectedTab] = useState("SOUTH INDIA");

  const tabs = ["NORTH INDIA", "EAST INDIA", "WEST INDIA", "SOUTH INDIA"];

  const galleryData = {
    "SOUTH INDIA": [
      { name: "Bangalore Palace", img: Bangalore },
      { name: "Munnar Hills", img: Coorg },
      { name: "Meenakshi Temple", img: Chennai },
      { name: "Goa Beach", img: Gokarna },
    ],
    "NORTH INDIA": [
      { name: "Red Fort, Delhi", img: Delhi },
      { name: "Manali Snow Hills", img: Manali },
      { name: "Hawa Mahal, Jaipur", img: Jaipur },
      { name: "Taj Mahal, Agra", img: Agra },
    ],
    "EAST INDIA": [
      { name: "Darjeeling Tea Gardens", img: Darjeeling },
      { name: "Puri Jagannath Temple", img: Puri },
      { name: "Shillong Falls", img: Shillong },
      { name: "Gangtok Monastery", img: Gangtok },
    ],
    "WEST INDIA": [
      { name: "Marine Drive, Mumbai", img: Mumbai },
      { name: "Goa Church", img: Goa },
      { name: "City Palace, Udaipur", img: Udaipur },
      { name: "Rann of Kutch", img: Rann },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-12 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
        <p className="italic text-lg text-gray-600 mt-2">
          At Jingle Holiday Bazar – All Over India Destination Gallery
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`text-md font-semibold px-4 py-2 rounded-full transition-all duration-200 border-2 ${
              selectedTab === tab
                ? "bg-blue-600 text-white border-blue-700 shadow"
                : "text-blue-600 border-blue-200 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryData[selectedTab]?.map((place, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-xl overflow-hidden transition hover:scale-[1.02] duration-200"
          >
            <img
              src={place.img}
              alt={place.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {place.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
