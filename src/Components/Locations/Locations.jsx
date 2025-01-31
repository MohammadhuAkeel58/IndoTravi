import LocationA from "./LocationA";
import LocationB from "./LocationB";

const Locations = () => {
  return (
    <section className="mt-112 px-4 sm:px-8 sm:mt-28  md:px-12  lg:px-16 xl:px-20 2xl:px-24 w-full max-w-screen-2xl mx-auto   ">
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
