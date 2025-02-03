import { useState, useEffect } from "react";
import image6 from "../../assets/images/image6.avif";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const comments = [
  {
    name: "Donald Sullivan",
    title: "Founder, Fiko",
    image: image6,
    text: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
  },
  {
    name: "Jane Doe",
    title: "Travel Enthusiast",
    image: image7,
    text: "I found the perfect vacation package through this site. The details and user-friendly interface made planning my trip so much easier. Highly recommend it to anyone planning a trip.",
  },
  {
    name: "John Smith",
    title: "CEO, Travelify",
    image: image8,
    text: "An exceptional platform for discovering travel destinations. The user reviews and price comparisons were incredibly useful for my decision-making process.",
  },
];

const Comment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-20 font-body">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12"
        >
          {/* Profile Section */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
            <img
              src={comments[currentIndex].image}
              alt={comments[currentIndex].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg mb-3 sm:mb-4 object-cover"
              loading="lazy"
            />

            <div className="text-center lg:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-800">
                {comments[currentIndex].name}
              </h4>
              <p className="text-sm sm:text-base text-gray-500">
                {comments[currentIndex].title}
              </p>
            </div>
          </div>

          {/* Comment Text */}
          <div className="w-full lg:w-3/4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              {comments[currentIndex].text}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-6 lg:mt-0">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + comments.length) % comments.length
                )
              }
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous comment"
            >
              <span className="text-base sm:text-lg font-bold text-gray-700">
                ←
              </span>
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % comments.length
                )
              }
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next comment"
            >
              <span className="text-base sm:text-lg font-bold text-gray-700">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comment;
