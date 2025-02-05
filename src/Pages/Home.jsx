
import SwiperSlider from "../Components/SwiperSlider";
import TopBrands from "../Components/TopBrands";
import { Outlet } from "react-router-dom";
import BlackFriday from "../Components/BlackFriday";
import Accordion from "../Components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NewsLetter from "../Components/NewsLetter";
const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
        });
        
        AOS.refresh();
      }, []);
    
  return (
    <div>
      <SwiperSlider  ></SwiperSlider>
      <TopBrands></TopBrands>
      <BlackFriday ></BlackFriday>
      <Outlet></Outlet>
      <Accordion ></Accordion>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
