import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src="/imgs/Logo.jpg" alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/category/mermeladas">Mermeladas</Link>
        </li>
        <li>
          <Link to="/category/mieles">Mieles</Link>
        </li>
        <li>
          <Link to="/category/secos">Frutos Secos</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
