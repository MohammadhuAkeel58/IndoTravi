import OptionsA from "./OptionsA";
import OptionsB from "./OptionsB";

const Options = () => {
  return (
    <section className="mt-20 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-16 space-y-12 lg:space-y-0">
        <OptionsA />
        <OptionsB />
      </div>
    </section>
  );
};

export default Options;
