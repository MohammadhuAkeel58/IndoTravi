import ToursA from "./ToursA";
import ToursB from "./ToursB";

const TourPackages = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-20 font-body mt-6 sm:mt-8">
      <div className="container mx-auto max-w-7xl">
        <ToursA />
        <ToursB />
      </div>
    </section>
  );
};

export default TourPackages;
