import banner3 from "../assets/menu/banner3.jpg";
import MenuCategory from "../components/MenuCategory";
import PageCover from "../components/shared/PageCover";

const OurMenu = () => {
  return (
    <>
      <PageCover
        img={banner3}
        Title="Our Menu"
        SubTitle="would you like to try a dish?"
      />
      <MenuCategory />
    </>
  );
};

export default OurMenu;
