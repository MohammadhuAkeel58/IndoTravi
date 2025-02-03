import { useState } from "react";
import image5 from "../../assets/images/image5.jpg";

const OptionsA = () => {
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [guest, setGuest] = useState("");

  const handleSearch = () => {
    if (!date || !budget || !guest) {
      alert("Please fill in all fields before searching.");
      return;
    }
    console.log("Date:", date);
    console.log("Budget:", budget);
    console.log("Guest:", guest);
  };

  return (
    <div className="lg:w-1/2 w-full font-body">
      <div className="relative rounded-3xl overflow-hidden shadow-lg group h-full">
        <img
          src={image5}
          alt="Travel Destination"
          className="object-cover w-full h-[600px] md:h-[650px] lg:h-[700px] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex flex-col gap-4 max-w-[400px] mx-auto">
            {/* Date Select */}
            <div className="w-full bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer w-full"
              >
                <option value="" disabled className="text-gray-800">
                  Date
                </option>
              </select>
            </div>

            {/* Budget Select */}
            <div className="w-full bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer w-full"
              >
                <option value="" disabled className="text-gray-800">
                  Budget
                </option>
              </select>
            </div>

            {/* Guest Select */}
            <div className="w-full bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <select
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer w-full"
              >
                <option value="" disabled className="text-gray-800">
                  Guest
                </option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 rounded-full py-3 text-sm font-medium transition-colors duration-300"
            >
              Search
            </button>
          </div>

          <p className="text-sm text-white/80 text-center mt-6 max-w-[400px] mx-auto">
            Embark on a journey to find your dream destination, where adventure
            and relaxation await, creating unforgettable memories along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionsA;
