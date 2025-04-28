import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="dogs">
      <Link to="/">
        <img
          src="https://i.insider.com/5b4cfd1a7708e9066f07cf17?width=700"
          alt="Cute Dog"
        />
      </Link>
    </div>
  );
};

export default NotFound;
