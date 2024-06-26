import { useState } from "react";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState("");

  const handleClickMenu = () => {
    setMobileMenu("active-menu");
  };

  return (
    <nav
      className="nav"
      style={
        mobileMenu === "active-menu" ? { height: "100vh" } : { height: "9vh" }
      }>
      <h1
        className="nav--title"
        style={
          mobileMenu === "active-menu"
            ? { display: "none" }
            : { display: "flex" }
        }>
        <a>{"Pedro Barbosa Dev"}</a>
      </h1>
      <IoMenu
        style={
          mobileMenu === "active-menu"
            ? { visibility: "hidden", display: "none" }
            : { visibility: "visible" }
        }
        color="#e0e0e0"
        onClick={handleClickMenu}
        size={46}
        className="hamburguer--icon"
      />
      {mobileMenu ? (
        <div className={mobileMenu}>
          <GoX
            color="#e0e0e0"
            className="close--menu"
            onClick={() => setMobileMenu("close")}
            size={56}
          />
          <ul className="mobile--menu__items">
            <li className="menu--links">
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to={"/"}>
                Home
              </Link>
            </li>
            <li className="menu--links">
              <Link
                className={location.pathname === "/about" ? "active" : ""}
                to={"/about"}>
                About Me
              </Link>
            </li>
            <li className="menu--links">
              <Link
                className={location.pathname === "/projects" ? "active" : ""}
                to={"/projects"}>
                Projects
              </Link>
            </li>
            <li className="menu--links">
              <Link
                className={location.pathname === "/contact" ? "active" : ""}
                to={"/contact"}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      <ul className="nav--items">
        <li className="nav--link">
          <Link className={location.pathname === "/" ? "active" : ""} to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav--link">
          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to={"/about"}>
            About Me
          </Link>
        </li>
        <li className="nav--link">
          <Link
            className={location.pathname === "/projects" ? "active" : ""}
            to={"/projects"}>
            Projects
          </Link>
        </li>
        <li className="nav--link">
          <Link
            className={location.pathname === "/contact" ? "active" : ""}
            to={"/contact"}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
