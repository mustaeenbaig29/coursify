import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Global.css'

const Navbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Coursify
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
              <p>Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/about"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <p>About Us</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/courses"
                
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <p>Courses</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/contact"
                
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                 <p>Contact Us</p>
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );

}


export default Navbar