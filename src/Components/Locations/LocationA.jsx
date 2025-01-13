import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const LocationA = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"
    >
      <div>
        <p className="text-sm text-gray-400 font-body font-bold">
          Best location
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 font-title">
          Indonesian tourism
        </h2>
      </div>
      <p className="mt-4 md:mt-0 text-gray-500 text-lg font-body">
        Extraordinary natural beauty, enjoy the rich culture, and experience the
        friendliness of the local people.
      </p>
    </motion.div>
  );
};

export default LocationA;
