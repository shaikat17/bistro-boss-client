import CallUs from "../components/CallUs";
import HomeBanner from "../components/HomeBanner";
import HomeSlider from "../components/HomeSlider";
import OurMenu from "../components/OurMenu";
import Testimonials from "../components/Testimonials";


const Home = () => {
    return (
        <>
         <HomeBanner />  
         <HomeSlider /> 
         <OurMenu />
         <CallUs />
         <Testimonials />
        </>
    );
};

export default Home;