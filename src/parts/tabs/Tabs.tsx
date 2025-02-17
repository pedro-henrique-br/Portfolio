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
    if(document.getElementById("icons-container") && document.getElementById("footer")){
    // @ts-expect-error: Object is possibly 'null'.
    document.getElementById("icons-container").style.visibility = "hidden"
    // @ts-expect-error: Object is possibly 'null'.
    document.getElementById("footer").style.visibility = "hidden"
    }
    setMenu(true);
  }

  const closeMenu = () => {
    if(document.getElementById("icons-container") && document.getElementById("footer")){
      // @ts-expect-error: Object is possibly 'null'.
      document.getElementById("icons-container").style.visibility = "visible"
      // @ts-expect-error: Object is possibly 'null'.
      document.getElementById("footer").style.visibility = "visible"
    }
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
            Sobre mim
          </Link>
          <Link
            className={location.pathname === "/projects" ? styles.Active : styles.Link}
            to="/projects">
            Projetos
          </Link>
          <Link
            className={location.pathname === "/contact" ? styles.Active : styles.Link}
            to="/contact">
            Contato
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
          Sobre mim
        </Link>
        <Link
          className={
            location.pathname === "/projects" ? styles.Active : styles.Link
          }
          to="/projects">
          Projetos
        </Link>
        <Link
          className={
            location.pathname === "/contact" ? styles.Active : styles.Link
          }
          to="/contact">
          Contato
        </Link>
      </ul>
    </div>
    </>
  );
};
