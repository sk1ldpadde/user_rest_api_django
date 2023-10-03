import React from "react";
// import Registration from "../pages/Regestration";
// import { useState } from "react";
// import Degrees from "../components/Degrees";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./src/assets/dhbw.png"
              alt="Logo der DHBW"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            students4students
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className=" justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  // onClick={homeClicked}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/registration"
                  // onClick={registerClicked}
                >
                  Registrierung
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {/* {showRegistration && <Registration />}
        {showHome && <Degrees />} */}
      </div>
    </>
  );
};

export default Navbar;
