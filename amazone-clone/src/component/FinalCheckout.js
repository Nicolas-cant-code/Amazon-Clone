/* eslint-disable */
import "./FinalCheckout.css";
import { React, useContext } from "react";
import ShoppingContext from "./shopping/ShoppingContext";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";

const FinalCheckout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />

        <div className="">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <Checkout
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default FinalCheckout;
