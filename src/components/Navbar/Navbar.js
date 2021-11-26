import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GAMLA Fund
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <div to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </div>
          </li>
          <li className='nav-item'>
            <div
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Funds
            </div>
          </li>
          <li className='nav-item'>
            <div
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Funds History
            </div>
          </li>
          <li className='nav-item'>
            <div
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Profile
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
