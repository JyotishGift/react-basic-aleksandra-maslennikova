import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  if (props.loggedIn) {
    return (
      <header className="Header">
        <a href='#'>Logo</a>
        <ul>
          <li>
            <button onClick={props.setSignOut}>SIGN OUT</button>
          </li>
          <li>
            {props.userName}
          </li>
        </ul>
      </header>
    )
  }
  return (
    <header className="Header">
      <a href='#'>Logo</a>
      <ul>
        <li>
          <Link to='/signin'>SIGN IN</Link>
        </li>
        <li>
          <Link to='/signup'>SIGN UP</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;