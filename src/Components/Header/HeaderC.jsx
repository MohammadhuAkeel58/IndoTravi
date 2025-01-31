import { useContext } from "react";
import { StatsContext } from "../../Context/StatsContext";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const HeaderC = () => {
  const { counters, statsData } = useContext(StatsContext);

  const formatCounter = (value, suffix) => {
    if (value >= 1000000) {
      return `${Math.floor(value / 1000000)}${suffix}`;
    } else if (value >= 1000) {
      return `${Math.floor(value / 1000)}${suffix}`;
    } else {
      return `${value}${suffix}`;
    }
  };

  return (
    <div
      id="stats-section"
      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-450px] sm:bottom-[-70px] z-20 w-full px-4 sm:px-6 md:px-8 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 font-body"
    >
      {statsData.map((stat, index) => (
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center w-full"
        >
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">
            {formatCounter(counters[index], stat.suffix)}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeaderC;
