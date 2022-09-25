import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { Paths } from '@routing';

import './header.scss';

const Header = (): ReactElement => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={Paths.Index}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={`/${Paths.MyBookings}`}>
              My Bookings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
