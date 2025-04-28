import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./component/Home";
import Products from "./component/Products";
import Header from "./component/layout/Header";
import ProductsDetails from "./component/ProductsDetails";
import Login from "./component/Login";
import NotFound from "./component/NotFound";
import ShoppingContext from "./component/shopping/ShoppingContext";
import { auth } from "./firebase";
import { useContext, useEffect } from "react";
import FinalCheckout from "./component/FinalCheckout";
import Payment from "./component/Payment";
import Orders from "./component/Orders";

const promise = loadStripe(
  "pk_test_51RHfnx4RjWLPJ9nyvI6jMvIygUGAphjhOGA4HXiiNb7DY5XUbn6K4F2Z4zk6ygX2Rk1Rue7ZigTE1TaOwK1Tk5az00rDAQzGND"
);

function App() {
  const shoppingContext = useContext(ShoppingContext);
  const { user, setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductsDetails />
          </Route>
          <Route path="/final-checkout">
            <FinalCheckout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders user={user} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
