import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../component/shopping/ShoppingContext";

const Product = ({ id, title, image, anchor, price, rating }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ id, title, image, anchor, price, rating });
  };

  return (
    <div className="products" key={id}>
      <div className="image_a">
        <div className="images">
          <img src={image} alt="" id={id === "5" ? "small" : ""} />
        </div>

        <div className="product_info">
          <h4>{anchor}</h4>
          <div class="stars">
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
          <h3 style={{ position: "relative" }}>
            <small style={{ fontSize: "14px" }}>R</small>
            {price}
            <small style={{ position: "absolute", fontSize: "13px" }}>00</small>
          </h3>

          <button onClick={addToBasketHandler}>Add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
