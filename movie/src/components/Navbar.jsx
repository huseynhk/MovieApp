import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" aria-current="page" to={"/"}>
            Full Film Izle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse mx-2 justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to={"/wish"}>
                  WishList
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to={"/year"}
                >
                  1950-2000
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to={"/year2"}
                >
                  2000-2023
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
