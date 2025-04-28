import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./component/shopping/ShoppingState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ShoppingState>
      <App />
    </ShoppingState>
  </BrowserRouter>
);
