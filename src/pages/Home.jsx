import CallUs from "../components/CallUs";
import HomeBanner from "../components/HomeBanner";
import HomeSlider from "../components/HomeSlider";
import Testimonials from "../components/Testimonials";


const Home = () => {
    return (
        <>
         <HomeBanner />  
         <HomeSlider /> 
         <CallUs />
         <Testimonials />
        </>
    );
};

export default Home;