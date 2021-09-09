import React from "react";
import { NavLink } from "react-router-dom";
//import styles from "./styles.css"
const Navbar = () => {
  return (
    /*10 col centre pe dikhao maximum auto<div className='row'>
          <div className="col-10 mx-auto"></div>*/
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="container-fluid">
        <NavLink
          activeClassName="menu_active"
          exact
          className="navbar-brand"
          to="/"
        >
          Navyug
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                to="/home"
              >
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      </div>

        </div>
      </div>
    </>
  );
};
export default Navbar;
