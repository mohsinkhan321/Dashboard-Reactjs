import React from "react";
import { Link as NavLink } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <aside
        style={{ height: "163rem" }}
        className="main-sidebar sidebar-dark-primary"
      >
        <NavLink to="#" className="brand-link">
          <span className="brand-text font-weight-light">
            <h4 className="ml-2">INDEX.</h4>
          </span>
        </NavLink>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex border-0">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <NavLink to="#" className="d-block">
                John Doe
                <i className="fas fa-angle-down right ml-2" />
              </NavLink>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
            >
              <li className="nav-item menu-open">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <span className="badge badge-danger navbar-badge">3</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-user-alt" />
                  <p>Profile</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon far fa-comment-alt" />
                  <p>
                    Chats
                    <span className="badge badge-info right">6</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>Notice Board</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon far fa-calendar" />
                  <p>Class Routine</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-video" />
                  <p>Live Class</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Attendence
                    <span className="badge badge-danger navbar-badge">3</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>Assessments</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Assignments
                    <span className="badge badge-info right">2</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Results
                    <i className="fas fa-angle-right right" />
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Course</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>Lectures</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>Fee Collection</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>Scholarship</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>FAQ</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideNavBar;
