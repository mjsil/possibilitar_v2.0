import React from "react";
import { Link } from "react-router-dom";
import cl from "classnames";

import "./styles.css";
import logo from "../../assets/logo.png";

const HeaderComponent = ({ navigation, pathname }) => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white border-bottom"
        id="navbar"
      >
        <div className="container ">
          <Link className="navbar-brand me-auto" to="/">
            <img src={logo} alt="" height="45" />
          </Link>

          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-justify"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto">
              {navigation.map(({ id, to, title }) => (
                <li className="nav-item mx-2">
                  <Link
                    key={id}
                    to={to}
                    className={`nav-link ${cl(pathname === to && "active")}`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
