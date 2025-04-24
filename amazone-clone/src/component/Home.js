import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61SX2tZ6-XL._SX3000_.jpg"
          className="bg_image"
          alt="Background"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
