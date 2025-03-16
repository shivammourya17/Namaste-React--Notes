import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnReactName,setBtnReactName] =useState("login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login"
            onClick={() => {
              btnReactName ==="login" ?
              setBtnReactName("logout")
              :setBtnReactName("login");
              console.log(btnReactName);
            }}
            >
            {btnReactName}

            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;