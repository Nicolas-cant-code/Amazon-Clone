import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x281.png"
          alt="Amazon logo"
          className="login_image"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="login_btn" onClick={signIn}>
            Sign in
          </button>

          <p>
            By signing in, you agree to Amazon's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
      </div>

      <div className="p_divider">
        <p>New to Amazon?</p>
      </div>
      <button className="create_account_btn" onClick={register}>
        Create your Amazon Account
      </button>

      <div className="footer">
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Help</li>
          <li>Cookies Notice</li>
          <li>Interest-Based Ads Notice</li>
        </ul>
        <p>© 2020-2025, Zaio.io</p>
      </div>
    </div>
  );
};

export default Login;
