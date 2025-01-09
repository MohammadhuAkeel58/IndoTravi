import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const LocationB = () => {
  const locations = [
    {
      image: image1,
      title: "Bromo, East Java",
      description: "Bromo Tengger Tour",
    },
    {
      image: image2,
      title: "Denpasar, Bali",
      description: "Bali Beach Tourism",
    },
    {
      image: image3,
      title: "Lampung, South Sumatra",
      description: "Sumatra Tourism",
    },
    {
      image: image4,
      title: "Jogjakarta, Central Java",
      description: "Borobudur Temple Tour",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-6 font-body">
      {locations.map((location, index) => (
        <div
          key={index}
          className={`${
            index === 0 || index === 3
              ? "lg:col-span-3 lg:row-span-1"
              : "lg:col-span-1 lg:row-span-1"
          } rounded-xl overflow-hidden shadow-md bg-white relative group`}
        >
          <img
            src={location.image}
            alt={location.description}
            className="w-full h-64 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <h4 className="text-white text-xl font-semibold">
              {location.title}
            </h4>
            <p className="text-gray-300">{location.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationB;
