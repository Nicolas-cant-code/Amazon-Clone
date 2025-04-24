import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../component/shopping/ShoppingContext";

const Product = ({ id, title, image, anchor, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ id, title, image, anchor, price });
  };
  // const addToBasketHandler = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id,
  //       title,
  //       image,
  //       anchor,
  //       price: 500, // or whatever price you want to include
  //     },
  //   });
  // };

  return (
    <div className="products" key={id}>
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="image_a">
        <div className="images">
          <img src={image} alt="" id={id === "5" ? "small" : ""} />
        </div>

        <div className="product_info">
          {/* There is no add to basket on front page of modern
          amazon so I added it to the p tag below all the images */}
          <p onClick={addToBasketHandler}>{anchor}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
