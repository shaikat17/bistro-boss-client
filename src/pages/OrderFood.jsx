import { useState } from "react";
import banner2 from "../assets/shop/banner2.jpg";
import PageCover from "../components/shared/PageCover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";
import OrderTab from "../components/OrderTab";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <>
      <PageCover
        img={banner2}
        Title="Order Food"
        SubTitle="would you like to try a dish?"
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desert</Tab>
          <Tab>Soup</Tab>
        </TabList>
        <TabPanel><OrderTab items={salad} /></TabPanel>
        <TabPanel><OrderTab items={pizza} /></TabPanel>
        <TabPanel><OrderTab items={desserts} /></TabPanel>
        <TabPanel><OrderTab items={soup} /></TabPanel>
      </Tabs>
    </>
  );
};

export default OrderFood;
