import React, { useState } from "react";
import Orders from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  // const [orders, setOrders] = useState(0);
  // function orderOne() {
  //   setOrders(orders + 1)
  // }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <Orders orderType={["Pizzas", "Salads", "Chocolate cake"]} />
    </div>
  );
};

export default Restaurant;
