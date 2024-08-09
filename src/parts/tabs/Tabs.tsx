import { Link, useLocation } from "react-router-dom";
import { BsList } from "react-icons/bs";
import styles from "./tabs.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { GoX } from "react-icons/go";


export const Tabs = () => {
  const [menu, setMenu] = useState(false);
  
  const location = useLocation();

  const handleMenu = () => {
    setMenu(true);
  }

  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <>
    <Navbar className={styles.Navbar} bg="dark" data-bs-theme="dark">
      <Container className={styles["Nav-container"]}>
        <Navbar.Brand className={styles["Navbar-Title"]}>
          Pedro Barbosa Dev
        </Navbar.Brand>
        <Nav className={styles["Nav-links"]}>
              <Link
                className={location.pathname === "/home" || location.pathname === "/" ? styles.Active : styles.Link}
                to={"/home"}>
                Home
              </Link>
          <Link
            className={location.pathname === "/about" ? styles.Active : styles.Link}
            to={"/about"}>
            About
          </Link>
          <Link
            className={location.pathname === "/projects" ? styles.Active : styles.Link}
            to="/projects">
            Projects
          </Link>
          <Link
            className={location.pathname === "/contact" ? styles.Active : styles.Link}
            to="/contact">
            Contact
          </Link>
        </Nav>
          <BsList onClick={handleMenu} className={styles.Button} />
      </Container>
    </Navbar>
    <div
      className={styles["menu-container"]}
      style={{transform: menu ? ("translateX(0%)") : ("translateX(100%)"), visibility: menu ? ("visible") : ("hidden")}}>
      <GoX
        onClick={closeMenu}
        className={styles["Close-menu"]}
      />
      <ul className={styles["menu-links"]}>
        <Link
          className={location.pathname === "/home" || location.pathname === "/" ? styles.Active : styles.Link}
          to={"/home"}>
          Home
        </Link>
        <Link
          className={
            location.pathname === "/about" ? styles.Active : styles.Link
          }
          to={"/about"}>
          About
        </Link>
        <Link
          className={
            location.pathname === "/projects" ? styles.Active : styles.Link
          }
          to="/projects">
          Projects
        </Link>
        <Link
          className={
            location.pathname === "/contact" ? styles.Active : styles.Link
          }
          to="/contact">
          Contact
        </Link>
      </ul>
    </div>
    </>
  );
};
