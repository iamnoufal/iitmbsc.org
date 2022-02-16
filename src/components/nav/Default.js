import { NavLink } from "react-router-dom";

import logo from "assets/images/logo.png";

import "./Default.css";

const LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/governance",
    label: "Governance",
  },
  {
    to: "/opportunities",
    label: "Opportunities",
  },
  {
    to: "/events",
    label: "Events",
  },
  {
    to: "/support",
    label: "Support",
  },
];

const NavigationDefault = () => {
  return (
    <div className="bg-color-maroon px-lg-5 pb-lg-4">
      <nav className="navbar navbar-dark navbar-expand-lg py-0 mx-lg-5">
        <div className="container-fluid bg-color-gold mx-lg-5 navbar-rounded">
          <img src={logo} className="navbar-brand-img mt-lg-5 m-2 mx-lg-5" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav navbar-dark py-2 pb-5 pb-lg-2 px-5">
              {LINKS.map(({ to, label }) => (
                <li className="nav-item mx-3" key={to}>
                  <NavLink
                    to={to}
                    exact
                    activeClassName="active"
                    className="nav-link text-uppercase text-white fw-bold"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-lg-5 px-lg-5">
        <div className="mx-lg-5 px-lg-5 d-flex justify-content-center d-lg-block">
          <div className="navbar-brand bg-color-primary mx-5 mx-lg-3 p-0 px-5 navbar-rounded">
            IIT Madras Online Degree Students
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDefault;