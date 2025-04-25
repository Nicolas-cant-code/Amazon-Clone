import React, { useContext } from "react";
import "./Subtotal.css";
import ShoppingContext from "./shopping/ShoppingContext";
import { useHistory } from "react-router-dom";

// Custom function to format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR", // South African Rand
  }).format(value);
};

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(event) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Subtotal;
