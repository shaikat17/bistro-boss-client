import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";

const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={false}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 mb-6 text-white">Deserts</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
