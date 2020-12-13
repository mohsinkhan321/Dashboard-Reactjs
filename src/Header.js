import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-header navbar navbar-expand fixed-top navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-widget="pushmenu"
              to=""
              role="button"
            >
              <i className="fas fa-bars" />
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link"
              data-toggle="dropdown"
              to=""
            >
              <i className="far fa-bell" />
              <span className="badge badge-danger navbar-badge">1</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link"
              data-toggle="dropdown"
              to=""
            >
              <i className="far fa-comment-alt"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="" role="button">
              <i className="far fa-envelope"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              to=""
              role="button"
            >
              <i className="far fa-calendar"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
