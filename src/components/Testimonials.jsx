// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Navigation } from "swiper";
import TitleSection from "./shared/TitleSection"

const Testimonials = () => {
    return (
        <>
        <TitleSection subTitle="What Our Clients Say" Title="Testimonials" />
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} >
        <SwiperSlide>
            <div className="flex flex-col items-center p-10 gap-3 mx-10">
            <p className="text-base font-light">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <h3 className="font-bold">Jane Doe</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center p-10 gap-3 mx-10">
            <p className="text-base font-light">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <h3 className="font-bold">Jane Doe</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center p-10 gap-3 mx-10">
            <p className="text-base font-light">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <h3 className="font-bold">Jane Doe</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center p-10 gap-3 mx-10">
            <p className="text-base font-light">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <h3 className="font-bold">Jane Doe</h3>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Testimonials;