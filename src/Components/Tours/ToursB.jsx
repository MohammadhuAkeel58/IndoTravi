import package1 from "../../assets/images/package1.jpg";
import package2 from "../../assets/images/package2.jpg";
import package3 from "../../assets/images/package3.jpg";

const ToursB = () => {
  const packages = [
    {
      image: package1,
      days: "7 Days",
      rating: "4.9",
      date: "23 AUGUST - 29 AUGUST",
      title: "Bali Tour Package",
      price: "$285",
    },
    {
      image: package2,
      days: "5 Days",
      rating: "4.9",
      date: "23 AUGUST - 27 AUGUST",
      title: "Java Tour Package",
      price: "$218",
    },
    {
      image: package3,
      days: "3 Days",
      rating: "4.9",
      date: "23 AUGUST - 25 AUGUST",
      title: "Solo Tour Package",
      price: "$163",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-96">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-900 bg-opacity-80 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full">
              {pkg.days}
            </div>
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 bg-gray-900 bg-opacity-70 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                stroke="none"
                className="h-3 w-3 sm:h-4 sm:w-4"
              >
                <path d="M12 .587l3.668 7.431 8.209 1.192-5.938 5.787 1.402 8.166L12 18.896 4.659 23.163l1.402-8.166-5.938-5.787 8.209-1.192z" />
              </svg>
              <span>{pkg.rating}</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-40 p-3 sm:p-4 text-white flex justify-between items-center rounded-b-2xl">
              <div>
                <p className="text-[10px] sm:text-xs">{pkg.date}</p>
                <h4 className="text-sm sm:text-base font-semibold mt-0.5 sm:mt-1">
                  {pkg.title}
                </h4>
              </div>
              <p className="text-base sm:text-lg font-bold">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 sm:mt-12">
        <button className="bg-black text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-full hover:bg-gray-800 transition-all duration-200 text-sm sm:text-base">
          View more
        </button>
      </div>
    </div>
  );
};

export default ToursB;
