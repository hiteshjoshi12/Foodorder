import React, { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

// function isloggedin(){
//   return false;
// }
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title /> 
        <div className="nav-items">
          <ul>
            <li>
            <Link className="link" to="/">Home</Link>
            </li>
            <li>
            <Link className="link" to="/about">About</Link>
            </li>
            <li>
            <Link className="link" to="/contact">Contact</Link>
            </li>
            <li>
            <Link className="link" to="/cart">Cart</Link>
            </li>
            <li>
            <Link className="link" to="/instamart">Instamart</Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          {isLoggedIn ? (<button className="headerbtn" onClick={() => { setIsLoggedIn(false);}}>Logout</button>):(<button className="headerbtn" onClick={() => { setIsLoggedIn(true); }}>Login</button>)}
        </div>
      </div>
    </>
  );
};
export default Header;
