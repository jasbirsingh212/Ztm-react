import React from "react";
import { Link } from "react-router";
import "./NavBar.styles.scss";
import logo from "../../assets/crown.svg";
import cartIcon from "../../assets/shopping-bag.svg";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
        <Link to="/cart" className="nav-link cart-icon">
          <img src={cartIcon} alt="Cart" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
