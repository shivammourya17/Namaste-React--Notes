import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnReactName,setBtnReactName] =useState("login");

   // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);

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
            <li>
            <Link to ="/" >Home</Link>
            </li>
            <li>
            <Link to ="/about">About Us</Link>
            </li>
            <li>
            <Link to ="/contact">Contact us</Link></li>
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