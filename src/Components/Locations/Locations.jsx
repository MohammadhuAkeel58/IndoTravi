import LocationA from "./LocationA";
import LocationB from "./LocationB";

const Locations = () => {
  return (
    <section className="mt-28 px-4 sm:px-8 lg:px-16   ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="py-12">
          <LocationA />
          <LocationB />
        </div>
      </div>
    </section>
  );
};

export default Locations;
