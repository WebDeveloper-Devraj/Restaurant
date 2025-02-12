import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
