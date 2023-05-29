import AboutBistro from "../components/AboutBistro";
import CallUs from "../components/CallUs";
import HomeBanner from "../components/HomeBanner";
import HomeSlider from "../components/HomeSlider";
import ImgBackSection from "../components/ImgBackSection";
import OurMenuHome from "../components/OurMenuHome";
import Testimonials from "../components/Testimonials";
import { useGlobalContext } from "../contextAPI/AuthContext";


const Home = () => {
    const value = useGlobalContext()
    console.log(value)
    return (
        <>
         <HomeBanner />  
         <HomeSlider /> 
         <AboutBistro />
         <OurMenuHome />
         <CallUs />
         <ImgBackSection />
         <Testimonials />
        </>
    );
};

export default Home;