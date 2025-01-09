import { useState } from "react";

const HeaderB = () => {
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [guest, setGuest] = useState("");

  const handleSearch = () => {
    console.log("Date:", date);
    console.log("Budget:", budget);
    console.log("Guest:", guest);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-3/5 px-4 mt-10 md:mt-28">
      <h1 className="text-lg sm:text-xl md:text-5xl font-bold mb-4 font-title">
        Extraordinary Natural and <br /> Cultural Charm
      </h1>
      <p className="text-xs sm:text-sm md:text-xl mb-6 font-body">
        Exploring Indonesia is an unforgettable adventure.
      </p>
      <div className="flex flex-wrap sm:flex-row items-center justify-center bg-white/10 backdrop-blur-md rounded-full shadow-lg px-4 sm:px-6 py-3 w-full sm:w-4/5 lg:w-3/5 gap-4 mt-5 font-body">
        <div className="flex items-center gap-2 border-r border-gray-300 pr-4 w-full sm:w-auto">
          <span className="text-white">
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
            className="bg-transparent text-white placeholder-white focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 border-r border-gray-300 pr-4 w-full sm:w-auto">
          <span className="text-white">
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
            placeholder="Budget"
            className="bg-transparent text-white placeholder-white focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-white">
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
            placeholder="Guest"
            className="bg-transparent text-white placeholder-white focus:outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full sm:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeaderB;
