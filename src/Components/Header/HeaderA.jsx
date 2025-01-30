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

      <div className="relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4">
          <h1 className="font-semibold text-lg md:text-xl font-body text-center md:text-left">
            INDOTRAVI
          </h1>
          <nav className="md:mt-0 mt-2">
            <ul className="flex flex-wrap items-center justify-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 space-x-3 sm:space-x-6 shadow-md text-white text-sm sm:text-base font-body">
              <li className="hover:text-gray-300 cursor-pointer font-medium">
                About
              </li>
              <li className="hover:text-gray-300 cursor-pointer font-medium">
                Services
              </li>
              <li className="hover:text-gray-300 cursor-pointer font-medium">
                Tour
              </li>
              <li className="hover:text-gray-300 cursor-pointer font-medium">
                Contact
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap items-center space-x-2 md:space-x-4 md:mt-0 justify-center mt-2">
            <div className="flex items-center bg-gray-600 rounded-full px-1 py-1 w-24 sm:w-20 relative">
              <button
                onClick={toggleLanguage}
                className={`text-sm px-2 py-1 rounded-full z-10 ${
                  language === "De" ? "text-black" : "text-white"
                }`}
              >
                De
              </button>

              <button
                onClick={toggleLanguage}
                className={`text-sm px-3 py-1 rounded-full z-10 ${
                  language === "En" ? "text-black" : "text-white"
                }`}
              >
                En
              </button>

              <div
                className={`absolute bg-white rounded-full w-8 h-8 transition-transform duration-300 ${
                  language === "En" ? "translate-x-10" : "translate-x-0"
                }`}
              ></div>
            </div>

            <button className="bg-white text-black font-medium px-4 sm:px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderA;
