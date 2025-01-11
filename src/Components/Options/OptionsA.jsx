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
    alert("Search initiated!");
  };

  return (
    <div className="lg:w-1/2 w-full font-body mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-lg group max-w-screen-lg mx-auto">
        <img
          src={image5}
          alt="Travel Destination"
          className="object-cover w-full h-[50vh] sm:h-[60vh] lg:h-[83vh] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-black bg-opacity-60 rounded-b-xl text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 border-b lg:border-b-0 lg:border-r border-gray-400 pr-9  w-full sm:w-auto">
              <span className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 4h10m-9 4h.01M6 16h.01M4 12h16M16 12h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2-2 0 012-2z"
                  />
                </svg>
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none w-full"
                placeholder="mm/dd/yyyy"
              />
            </div>

            <div className="flex items-center gap-2 border-b lg:border-b-0 lg:border-r border-gray-400 pr-4 w-full sm:w-auto">
              <span className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c.828 0 1.5.672 1.5 1.5S12.828 11 12 11s-1.5-.672-1.5-1.5S11.172 8 12 8zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none w-full"
                placeholder="Budget"
              />
            </div>

            <div className="flex items-center gap-2 border-b lg:border-b-0 lg:border-r border-gray-400 w-full sm:w-auto">
              <span className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a6 6 0 00-5-5.91M9 20H4v-2a6 6 0 015-5.91M12 14a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </span>
              <input
                type="number"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none w-full"
                placeholder="Guest"
              />
            </div>

            <div className="w-full sm:w-auto ">
              <button
                onClick={handleSearch}
                className="bg-white text-black rounded-full px-8 py-2 font-medium hover:bg-blue-600 hover:text-white transition w-full"
              >
                Search
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-300 text-center lg:text-left">
            Embark on a journey to find your dream destination, where adventure
            and relaxation await, creating unforgettable memories along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionsA;
