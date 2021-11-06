// Components
import Campains from "components/Campains";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";

function App() {

  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      { windowWidth <= 768 && <Campains/> }
      <HeroSection />
      <Categories />
      { windowWidth > 768 && <Campains/> }
      <div class="container mx-auto flex flex-col gap-y-12">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
