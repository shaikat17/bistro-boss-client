import FoodCard from "./shared/FoodCard";

// TODO: implement pagination here on this page
const OrderTab = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-3">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
