import OptionsA from "./OptionsA";
import OptionsB from "./OptionsB";

const Options = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
          <OptionsA />
          <OptionsB />
        </div>
      </div>
    </section>
  );
};

export default Options;
