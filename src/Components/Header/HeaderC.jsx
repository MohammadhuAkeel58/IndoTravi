import { useContext } from "react";
import { StatsContext } from "../../Context/StatsContext";

const HeaderC = () => {
  const { counters, statsData } = useContext(StatsContext);
  return (
    <div
      id="stats-section"
      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-70px] z-20 w-full sm:w-4/5 lg:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-6 font-body"
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">
            {counters[index]}
            {typeof stat.value === "string" && "+"}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeaderC;
