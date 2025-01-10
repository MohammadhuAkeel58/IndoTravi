import hill from "../../assets/image0.jpg";

const HeaderA = () => {
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

      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md "></div>

      <div className="relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4 ">
          <h1 className="font-semibold text-lg md:text-xl font-body text-center md:text-left ">
            INDOTRAVI
          </h1>
          <nav className=" md:mt-0 mt-2">
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
            <div className="flex items-center bg-white/20 rounded-full px-2 py-1 font-body">
              <button className="text-sm text-white px-3 py-1 rounded-full bg-transparent hover:bg-white hover:text-black transition">
                De
              </button>
              <button className="text-sm text-black px-3 py-1 rounded-full bg-white transition">
                En
              </button>
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
