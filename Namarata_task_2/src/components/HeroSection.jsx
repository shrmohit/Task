import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Holiday-themed background images

import hero1 from "../assets/badrinath-banner.webp";
import hero2 from "../assets/himalay.webp";
import hero3 from "../assets/rameshwarm-banner.webp";

// Holiday jingle taglines
const phrases = [
  "Experience the Magic of Holidays",
  "Shop, Celebrate & Create Memories",
  "Your One-Stop Destination for Festive Fun",
];

// Background images array
const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex]);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden text-white">
      {/* Background images with fade effect */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Holiday Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === bgIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          <p className="text-4xl font-bold mb-2">Welcome to Jingle Holiday Bazar</p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 min-h-[80px]">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>

          <p className="text-xl font-medium mb-6">
            Discover a winter wonderland of joy, shopping, and entertainment. Join thousands of families enjoying holiday deals, food, and festive vibes—book your entry now!
          </p>

          <button className="bg-blue-500 px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 hover:bg-blue-700 transition">
            Book Your Spot <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
