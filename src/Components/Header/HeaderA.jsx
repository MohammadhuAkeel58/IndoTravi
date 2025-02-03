import hill from "../../assets/image0.jpg";
import { useState } from "react";

const HeaderA = () => {
  const [language, setLanguage] = useState("En");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "En" ? "De" : "En"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 space-x-8 shadow-md text-white text-sm sm:text-base absolute left-1/2 transform -translate-x-1/2">
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
            Contact
          </a>
        </nav>

        {/* Desktop Language and Login */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center bg-gray-600 rounded-full px-2 py-1">
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

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col items-center space-y-6 text-white text-lg">
              <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>
                About
              </a>
              <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>
                Services
              </a>
              <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>
                Tour
              </a>

              <a href="#" className="hover:text-gray-300" onClick={toggleMenu}>
                Contact
              </a>
            </nav>

            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-gray-600 rounded-full px-2 py-1">
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

            {/* Mobile Login Button */}
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderA;
