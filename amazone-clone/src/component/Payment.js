import ShoppingContext from "./shopping/ShoppingContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="payments">
      <div class="payment_container">
        <h1>
          Checkout <Link to="/final-checkout">{basket?.length}</Link> Items
        </h1>
        <div class="payment_section">
          <div class="paymeny_title">
            <h3>Delivery Address</h3>
          </div>
          <div class="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Cape Town, SA</p>
          </div>
        </div>

        <div class="payment_section">
          <div class="paymeny_title">
            <h3>Review items and delivery</h3>
          </div>
          <div class="payment_items">
            {basket.map((item) => (
              <Checkout
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={500}
              />
            ))}
          </div>
        </div>
        <div class="payment_section">
          <div class="paymeny_title">
            <h3>Payment Method</h3>
            <div class="payment_details">{/* Stripe code will go here*/}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
