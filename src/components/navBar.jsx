import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      <div className=" navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link " to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container">
    //     <NavLink className="navbar-brand" to="/">
    //       Vidly
    //     </NavLink>
    //     {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
    //     <div className="navbar-nav ">
    //       <NavLink className="nav-item nav-link " to="/movieForm">
    //         movies
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/customers">
    //         customers
    //       </NavLink>
    //       <NavLink className="nav-item nav-link" to="/rentals">
    //         rentals
    //       </NavLink>
    //     </div>
    //     {/* </div> */}
    //   </div>
    // </nav>
  );
};

export default NavBar;
