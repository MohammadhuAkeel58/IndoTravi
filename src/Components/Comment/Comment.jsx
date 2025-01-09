import { useState, useEffect } from "react";
import image6 from "../../assets/images/image6.avif";

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
    image: image6,
    text: "I found the perfect vacation package through this site. The details and user-friendly interface made planning my trip so much easier. Highly recommend it to anyone planning a trip.",
  },
  {
    name: "John Smith",
    title: "CEO, Travelify",
    image: image6,
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
    <section className="py-12 px-6 lg:px-20 font-body">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="lg:w-1/4 w-full flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img
            src={comments[currentIndex].image}
            alt={comments[currentIndex].name}
            className="w-20 h-20 rounded-full shadow-lg mb-4"
          />

          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold text-gray-800">
              {comments[currentIndex].name}
            </h4>
            <p className="text-gray-500">{comments[currentIndex].title}</p>
          </div>
        </div>

        <div className="lg:w-3/4 w-full">
          <p className="text-gray-700 text-lg leading-relaxed relative">
            <span className="absolute -left-8 text-6xl text-gray-300 font-serif">
              “
            </span>
            {comments[currentIndex].text}
          </p>
        </div>

        <div className="flex items-center mt-6 lg:mt-0 lg:ml-6 space-x-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + comments.length) % comments.length
              )
            }
            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <span className="text-lg font-bold text-gray-700">←</span>
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length)
            }
            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <span className="text-lg font-bold text-gray-700">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comment;
