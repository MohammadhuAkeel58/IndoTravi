import { useState } from "react";

const HeaderB = () => {
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [guest, setGuest] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!date || !budget || !guest) {
      setError("Please fill in all fields before searching.");
      return;
    }
    setError("");
    console.log("Date:", date);
    console.log("Budget:", budget);
    console.log("Guest:", guest);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
      <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 px-4">
        Extraordinary natural and <br /> cultural charm
      </h1>
      <p className="text-white text-sm sm:text-lg mb-6 px-4">
        Exploring Indonesia is an unforgettable adventure.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center bg-white/10 backdrop-blur-md rounded-3xl shadow-lg px-6 py-4 w-full sm:w-3/4 lg:w-3/5 gap-4 mb-32 ">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full sm:w-1/3 bg-transparent text-white placeholder-white focus:outline-none border-b sm:border-none pb-2 px-4 py-2 text-lg "
          placeholder="Date"
        />
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full sm:w-1/3 bg-transparent text-white placeholder-white focus:outline-none border-b sm:border-none pb-2 px-4 py-2 text-lg  "
          placeholder="Budget"
        />
        <input
          type="number"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          className="w-full sm:w-1/3 bg-transparent text-white placeholder-white focus:outline-none border-b sm:border-none pb-2 px-4 py-2 text-lg "
          placeholder="Guest"
        />
        <button
          onClick={handleSearch}
          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition w-full sm:w-auto"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default HeaderB;
