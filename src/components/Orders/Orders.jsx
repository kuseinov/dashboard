import React from "react";
import css from "./Orders.module.css";
import { groupNumber, ordersData } from "../../data";
import OrdersPieCart from "../OrdersPieChart/OrdersPieCart";
const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="" />
        <span>Orders today</span>
      </div>
      <div className={`grey-container ${css.stat} `}>
        <span>Amount</span>
        <span>${groupNumber(5555)}</span>
      </div>
      <div className={css.orders}>
        {ordersData.map((order, index) => (
          <div key={index} className={css.order}>
            <span>{order.name}</span>
            <span>${order.change}</span>
            <div>
              <span>{order.type}</span>
              <span>items:{order.items}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={css.orderChart}>
        <span>Split by orders</span>
        <OrdersPieCart />
      </div>
    </div>
  );
};

export default Orders;
