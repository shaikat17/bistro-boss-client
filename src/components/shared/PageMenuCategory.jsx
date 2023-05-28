

const PageMenuCategory = ({img, Title, SubTitle}) => {
    return (
        <div
      className="p-32 bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay p-20 text-white text-center">
        <h1 className="text-6xl font-bold uppercase mb-3">{Title}</h1>
        <h4 className="text-xl uppercase font-extralight">{SubTitle}</h4>
      </div>
    </div>
    );
};

export default PageMenuCategory;