import "./App.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import MenuPage from "../components/Menu/MenuPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
