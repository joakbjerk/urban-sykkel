import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              HOME
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
