import featured from "../assets/home/featured.jpg";
import TitleSection from "./shared/TitleSection";

const ImgBackSection = () => {
  return (
    <div className="hero min-h-screen my-10" style={{ backgroundImage: `url(${featured})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content flex-col">
  <TitleSection Title="From Our Menu" subTitle="Check It Out" />
    <div className="p-32 pt-10 flex gap-6">
        <img src={featured} alt="featured" className="w-1/2" />
      <div className="text-left">
        <p className="font-bold">March 20, 2023</p>
        <p className="font-bold uppercase my-2">where can i get some?</p>
      <p className="mb-5 font-light">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn">Read More</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default ImgBackSection;
