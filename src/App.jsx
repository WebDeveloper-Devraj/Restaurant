import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import TodaysSpecial from "./components/FeaturedDishes";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <TodaysSpecial></TodaysSpecial>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
