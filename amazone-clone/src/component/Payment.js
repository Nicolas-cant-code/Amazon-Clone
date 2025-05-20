import ShoppingContext from "./shopping/ShoppingContext";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Checkout from "./Checkout";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";
import "./Payment.css";
import { db } from "../firebase";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    getClientSecret();
  }, [basket]);

  // console.log("The secret is >>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        // Store the order in the database
        db.collection("user")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        //Empty the basket
        emptyBasket();

        // Redirect to orders page
        history.push("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR", // South African Rand
    }).format(value);
  };

  return (
    <div className="payments">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/final-checkout">{basket?.length}</Link> Items
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Cape Town, SA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <Checkout
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
            <div className="payment_details">
              {/* Stripe code will go here*/}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment_price_container">
                  <strong>
                    Order Total: {formatCurrency(getBasketTotal(basket))}
                  </strong>
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
