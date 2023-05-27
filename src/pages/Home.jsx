import AboutBistro from "../components/AboutBistro";
import CallUs from "../components/CallUs";
import HomeBanner from "../components/HomeBanner";
import HomeSlider from "../components/HomeSlider";
import ImgBackSection from "../components/ImgBackSection";
import OurMenu from "../components/OurMenuHome";
import Testimonials from "../components/Testimonials";


const Home = () => {
    return (
        <>
         <HomeBanner />  
         <HomeSlider /> 
         <AboutBistro />
         <OurMenu />
         <CallUs />
         <ImgBackSection />
         <Testimonials />
        </>
    );
};

export default Home;