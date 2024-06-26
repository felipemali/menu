// import { Link } from "react-router-dom";

import Menu from "../../components/Menu";
import PlaceOrders from "../../components/PlaceOrders";
import Header from "../../components/Header";
import { useState } from "react";
import PlaceOrder from "../../components/PlaceOrder";

const Home = () => {
  const [valueLabel, setValueLabel] = useState("1");
  return (
    <>
      <Header />
      {/* <PlaceOrders setValueLabel={setValueLabel} /> */}
      <Menu valueLabel={valueLabel} setValueLabel={setValueLabel} />
      <PlaceOrder setValueLabel={setValueLabel} />
    </>
  );
};

export default Home;
