import useMenu from "../hooks/useMenu";
import menuImg from "../assets/menu/menu-bg.png";
import soupImg from "../assets/menu/soup-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import TitleSection from "./shared/TitleSection";
import PageMenuCategory from "./shared/PageMenuCategory";
import MenuItem from "./shared/MenuItem";
import PageSection from "./shared/PageSection";

const MenuCategory = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <TitleSection Title="Today's Offer" subTitle="Don't Miss" />
      <PageSection items={offered} />
      <PageMenuCategory img={dessertImg} Title="DESSERT" />
      <PageSection items={desserts} />
      <PageMenuCategory img={pizzaImg} Title="PIZZA" />
      <PageSection items={pizza} />
      <PageMenuCategory img={saladImg} Title="SALAD" />
      <PageSection items={salad} />
      <PageMenuCategory img={soupImg} Title="SOUP" />
      <PageSection items={soup} />
      
    </>
  );
};

export default MenuCategory;
