import { Link } from "react-router-dom";
import ThemeContextStore from "../store/theme-store";
import { useContext } from "react";
import style from "../css_modules/navbar.module.css";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContextStore);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 sticky-top mb-lg-5"
      data-aos="fade-down" data-aos-duration="1000">
        <div
          className={`container ${
            theme == "dark" ? style.navbarBgDark : style.navbarBgLight
          } py-sm-2 p-lg-0 py-2 div-container gap-lg-5 `}
        >
          <Link
            className={`navbar-brand ps-4 ${
              theme == "dark" ? style.navTitleDark : style.navTitleLight
            }`}
            to={"/home"}
          >
            PORTFOLIO
          </Link>
          <button
            className={`navbar-toggler me-4`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={`navbar-toggler-icon ${
                theme == "dark" ? style.burgerMenuDark : ""
              }`}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  }`}
                  to={"/home"}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  }`}
                  to={"/profile"}
                >
                  PROFILE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  }`}
                  to={"/contact"}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="pe-3">
              <button
                className="d-flex align-items-center"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={changeTheme}
                data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"
              >
                <img
                  src={`./images/${theme == "dark" ? "moon.png" : "sun.png"}`}
                  alt=""
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`offcanvas offcanvas-start ${theme == "dark" ? "body-background-dark" : "body-background-light"}`}
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title " id="offcanvasExampleLabel">
            <Link
            className={`navbar-brand ms-sm-2 ${
              theme == "dark" ? style.navTitleDark : style.navTitleLight
            }`}
            to={"/"}
          >
            PORTFOLIO
          </Link>
          </h5>
          <div className="ms-lg-5 ms-sm-5 ">
              <button
                className="d-flex align-items-center "
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={changeTheme}
              >
                <img
                  src={`./images/${theme == "dark" ? "moon.png" : "sun.png"}`}
                  alt=""
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ms-sm-4">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  } offcanvasNavItems`}
                  to={"/home"}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  } offcanvasNavItems`}
                  to={"/profile"}
                >
                  PROFILE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    theme == "dark"
                      ? style.navLinkItemsDark
                      : style.navLinkItemsLight
                  } offcanvasNavItems`}
                  to={"/contact"}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
