import React from "react";
import "./ProductDeals.css";

const ProductDeals = ({ image, deal, name, price, percent }) => {
  return (
    <div className="product">
      <div className="image_and_info">
        <div className="pictures">
          <img src={image} alt="" />
        </div>

        <div className="products_info">
          <h2>
            <span>{percent}</span> {deal}
          </h2>
          <h3>{price}</h3>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDeals;
