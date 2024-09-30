import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from '../../components/Hero/Hero'
import Testimonial from '../../components/Testimonial/Testimonial'
import Services2 from '../../components/Services/Services2'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Hero />
    <Testimonial/>
    <Services2 />
    <Footer />
  </div>)
    };
    
    export default Home;
    