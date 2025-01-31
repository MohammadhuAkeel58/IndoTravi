import hill from "../../assets/image0.jpg";
import { useState } from "react";

const HeaderA = () => {
  const [language, setLanguage] = useState("En");

  const toggleLanguage = () => {
    setLanguage((pre) => (pre === "En" ? "De" : "En"));
  };
  return (
    <>
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${hill})`,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

      <header className="relative w-full p-4 sm:p-6 flex items-center justify-between bg-transparent">
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          INDOTRAVI
        </h1>
        <nav className="hidden sm:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 space-x-4 shadow-md text-white text-sm sm:text-base">
          <a
            href="#"
            className="hover:text-gray-300 cursor-pointer font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-300 cursor-pointer font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-gray-300 cursor-pointer font-medium"
          >
            Tour
          </a>
          <a
            href="#"
            className="hover:text-gray-300 cursor-pointer font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-300 cursor-pointer font-medium"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-600 rounded-full px-2 py-1 relative">
            <button
              className="relative w-16 h-8 flex items-center bg-gray-600 rounded-full p-1 cursor-pointer focus:outline-none"
              onClick={toggleLanguage}
            >
              <div
                className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  language === "En" ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
              <span className="text-white text-sm absolute left-2">De</span>
              <span className="text-white text-sm absolute right-2">En</span>
            </button>
          </div>
          <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderA;
