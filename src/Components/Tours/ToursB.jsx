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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="relative w-full h-96">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-80 text-white text-sm px-4 py-1 rounded-full">
              {pkg.days}
            </div>
            <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gray-900 bg-opacity-70 text-white text-sm font-medium px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                stroke="none"
                className="h-4 w-4"
              >
                <path d="M12 .587l3.668 7.431 8.209 1.192-5.938 5.787 1.402 8.166L12 18.896 4.659 23.163l1.402-8.166-5.938-5.787 8.209-1.192z" />
              </svg>
              <span>{pkg.rating}</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-40 p-4 text-white flex justify-between items-center rounded-b-2xl">
              <div>
                <p className="text-xs">{pkg.date}</p>
                <h4 className="text-base font-semibold mt-1">{pkg.title}</h4>
              </div>
              <p className="text-lg font-bold">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12">
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-200">
          View more
        </button>
      </div>
    </div>
  );
};

export default ToursB;
