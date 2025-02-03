import { useState } from "react";

const HeaderB = () => {
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
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
        Extraordinary natural and <br /> cultural charm
      </h1>
      <p className="text-white text-sm sm:text-lg mb-8">
        Exploring Indonesia is an unforgettable adventure.
      </p>

      <div className="w-full max-w-[850px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row bg-black/30 backdrop-blur-md rounded-[30px] overflow-hidden">
          {/* Date Select */}
          <div className="flex items-center w-full px-6 py-4 border-b sm:border-b-0 sm:border-r border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white/70 shrink-0"
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
            <div className="flex-1 relative">
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-white appearance-none focus:outline-none cursor-pointer text-base pl-3"
              >
                <option value="" disabled className="text-gray-800">
                  Date
                </option>
                <option value="today" className="text-gray-800">
                  Today
                </option>
                <option value="tomorrow" className="text-gray-800">
                  Tomorrow
                </option>
                <option value="next-week" className="text-gray-800">
                  Next Week
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/70 absolute right-0 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Budget Select */}
          <div className="flex items-center w-full px-6 py-4 border-b sm:border-b-0 sm:border-r border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white/70 shrink-0"
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
            <div className="flex-1 relative">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent text-white appearance-none focus:outline-none cursor-pointer text-base pl-3"
              >
                <option value="" disabled className="text-gray-800">
                  Budget
                </option>
                <option value="low" className="text-gray-800">
                  $0 - $500
                </option>
                <option value="medium" className="text-gray-800">
                  $500 - $1000
                </option>
                <option value="high" className="text-gray-800">
                  $1000+
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/70 absolute right-0 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Guest Select */}
          <div className="flex items-center w-full px-6 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white/70 shrink-0"
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
            <div className="flex-1 relative">
              <select
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                className="w-full bg-transparent text-white appearance-none focus:outline-none cursor-pointer text-base pl-3"
              >
                <option value="" disabled className="text-gray-800">
                  Guest
                </option>
                <option value="1" className="text-gray-800">
                  1 Person
                </option>
                <option value="2" className="text-gray-800">
                  2 People
                </option>
                <option value="3" className="text-gray-800">
                  3+ People
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/70 absolute right-0 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Search Button - Removed all border-related classes */}
          <div className="p-4 sm:p-1 sm:pr-2">
            <button
              onClick={handleSearch}
              className="w-full sm:w-[120px] bg-white hover:bg-gray-50 text-black font-medium h-12 sm:h-full rounded-full transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderB;
