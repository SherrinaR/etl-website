import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  // update the state for clicking the menu icon
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // will reverse the state when clicked
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // function to display button based on screen size
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Hook to render function only once; won't show every page refresh
  useEffect(() => {
    showButton();
  }, []);

  // whenever you resize the screen the 'showButton' function activates
  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    ETL Ministries <i class="uil uil-clinic-medical" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "uil uil-times" : "uil uil-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/biblestudy" className="nav-links" onClick={closeMobileMenu}>
                      BIBLE STUDY
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                      EVENTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/mission" className="nav-links" onClick={closeMobileMenu}>
                      MISSION
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/give" className="nav-links" onClick={closeMobileMenu}>
                      GIVE
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>ABOUT US</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar