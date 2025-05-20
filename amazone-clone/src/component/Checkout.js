import React, { useContext } from "react";
import ShoppingContext from "./shopping/ShoppingContext";
import "./Checkout.css";

const Checkout = ({ id, image, title, price, hideButton, rating }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_product">
      <div className="checkout_images">
        <img src={image} alt="" id={id === "5" ? "small" : ""} />
      </div>
      <div className="checkout_all">
        <div className="checkout_product_title">
          <h2>{title}</h2>
        </div>

        <div className="product_info">
          <div className="stars">
            <p>{rating}</p>
            <p className="rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span key={i} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
            </p>
          </div>

          <div className="checkout_price">
            <small>R</small>
            <strong>{price}</strong>
          </div>

          {!hideButton && (
            <button onClick={removeFromBasketHandler}>
              Remove From Basket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
