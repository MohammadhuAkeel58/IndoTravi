import ToursA from "./ToursA";
import ToursB from "./ToursB";

const TourPackages = () => {
  return (
    <section className="py-12 px-6 lg:px-20 font-body mt-8">
      <div className="container mx-auto">
        <ToursA />
        <ToursB />
      </div>
    </section>
  );
};

export default TourPackages;
