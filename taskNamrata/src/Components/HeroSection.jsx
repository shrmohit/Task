import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/herosection.jpg";

const phrases = [
  "Savor the Goodness, Celebrate the Flavors",
  "Pure Veg Catering for Royal Weddings",
  "Taste Tradition, Serve with Passion",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>


      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <p className="text-4xl font-bold mb-2">
            Welcome to Taj Taazagi Catters
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 min-h-[80px]">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
          {/* paragraph */}
          <p className="text-xl  font-medium mb-6">
            We are the top vegetarian wedding caterer in Agra. We have completed
            over 2,000+ weddings, supported by a professional team of 340 members.
          </p>

          <button className="bg-red-600 px-6 py-3 rounded-full font-semibold text-yellow-50 flex items-center gap-2 hover:bg-red-700 transition">
            Explore <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
