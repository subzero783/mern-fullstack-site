import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/user/signup">Signup</Link>
      </li>
      <li>
        <Link to="/user/login">Login</Link>
      </li>
      <li>
        <Link to="/user/dashboard">Dashboard</Link>
      </li> */}
    </ul>
  </nav>
);

export default NavBar;