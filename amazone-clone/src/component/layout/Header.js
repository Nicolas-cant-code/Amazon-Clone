import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingContext from "../shopping/ShoppingContext";
import { auth } from "../../firebase";

// import SearchIcon from "@mui/icons-material/Search";
// // import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// MATERIAL ICONS

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.appendChild(link);

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="searchbar">
        <input
          type="text"
          className="headerInput"
          placeholder="Search Amazon.co.za"
        />
        {/* <SearchIcon className="searchIcon" /> */}
        <span className="material-icons searchIcon">search</span>
      </div>

      <div className="nav">
        <Link to={user === null ? "/login" : "/account"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="signIn">
              Hello {user === null ? ", sign in" : user.email}
            </span>
            <span className="nav_bigger">
              {user !== null ? "Sign out" : "Account and Lists"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="returns">Returns</span>
          <span className="nav_bigger">& Orders</span>
        </div>

        <Link to="/final-checkout">
          <div className="header_option">
            <span className="material-icons cart">shopping_cart</span>
            <span className="header_basketCount">{basket?.length}</span>
            <span className="nav_bigger">Basket</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
