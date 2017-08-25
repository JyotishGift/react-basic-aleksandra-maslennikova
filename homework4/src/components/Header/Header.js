import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <a href='#'>Logo</a>
      <ul>
        <li>
          <Link to ='/signin'>SIGN IN</Link>
        </li>
        <li>
          <Link to ='/signup'>SIGN UP</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;