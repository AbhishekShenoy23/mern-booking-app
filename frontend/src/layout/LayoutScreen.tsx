import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const LayoutScreen = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutScreen;
