import TourPackages from "../Components/Tours/TourPackages";
import Options from "../Components/Options/Options";
import Comment from "../Components/Comment/Comment";
import Blogs from "../Components/Blog/Blogs";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Locations from "../Components/Locations/Locations";

const Home = () => {
  return (
    <div>
      <Header />
      <Locations />
      <Options />
      <TourPackages />
      <Comment />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
