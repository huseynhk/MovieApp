import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import FirstPartYear from "./FirstPartYear";
import SecondPart from "./SecondPart";

const Years = () => {
  const location = useLocation();

  return (
    <>
      <div className="m-3 fs-3 py-2 bg-dark rounded d-flex  justify-content-center align-items-center">
        <li className="links">
          <Link
            className={
              location.pathname === "/year/first" ? "activeLink" : "Link"
            }
            to="first"
            activeClassName="active"
          >
            1950-1975
          </Link>
        </li>
        <li className="links ms-5">
          <Link
            className={
              location.pathname === "/year/second" ? "activeLink" : "Link"
            }
            to="second"
          >
            1975-2000
          </Link>
        </li>
      </div>

      <Routes>
        <Route path="first" element={<FirstPartYear />} />
        <Route path="second" element={<SecondPart />} />
      </Routes>
    </>
  );
};

export default Years;
