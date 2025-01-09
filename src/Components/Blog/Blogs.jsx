import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";

const Blogs = () => {
  const blogs = [
    {
      image: blog1,
      date: "Nov 14, 2022",
      title: "2023 Travel Trends – what you need to know",
      description:
        "2023 taught us valuable life lessons. Plans don’t always work out, flexibility in life is key, and...",
    },
    {
      image: blog2,
      date: "Nov 18, 2022",
      title: "Jeep Adventure is a new attraction for tourists visiting Garut",
      description:
        "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20 font-body">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-xl text-gray-500 font-medium font-body">
            Our Blog
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 font-title">
            Our travel memories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  {blog.title}
                </h4>
                <p className="text-gray-500 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-200">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
