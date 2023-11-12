import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../constant/Router";
import { activeLink } from "../utils/ActiveLink";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-2 mt-2"
            aria-current="page"
            to={ROUTER.Movie}
          >
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
            <ul className="navbar-nav py-2 align-items-center ">
              <li className="nav-item mt-2">
                <Link
                  className={
                    activeLink(ROUTER.Movie, pathname) ? "activeLink" : "Link"
                  }
                  aria-current="page"
                  to={ROUTER.Movie}
                >
                  All Movies
                </Link>
              </li>
              <li className="nav-item mx-3 mt-2">
                <Link
                  className={
                    activeLink(ROUTER.WishList, pathname)
                      ? "activeLink"
                      : "Link"
                  }
                  aria-current="page"
                  to={ROUTER.WishList}
                >
                  WishList
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  className={
                    activeLink(ROUTER.MovieYear, pathname)
                      ? "activeLink"
                      : "Link"
                  }
                  aria-current="page"
                  to={ROUTER.MovieYear}
                >
                  1950-2000
                </Link>
              </li>
              <li className="nav-item mx-3 mt-2">
                <Link
                  className={
                    activeLink(ROUTER.Year2, pathname) ? "activeLink" : "Link"
                  }
                  aria-current="page"
                  to={ROUTER.Year2}
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
