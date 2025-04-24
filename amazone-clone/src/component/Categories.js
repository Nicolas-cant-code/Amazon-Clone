import "./Categories.css";
import React from "react";

const Categories = ({ image }) => {
  return (
    <div className="image">
      <img src={image} alt="" />
    </div>
  );
};

export default Categories;
