import HeaderA from "./HeaderA";
import HeaderB from "./HeaderB";
import HeaderC from "./HeaderC";

const Header = () => {
  return (
    <section className="relative h-screen text-white mx-3 mt-3 rounded-md">
      <HeaderA />
      <HeaderB />
      <HeaderC />
    </section>
  );
};

export default Header;
