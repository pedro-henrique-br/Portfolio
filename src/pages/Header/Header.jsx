import Nav from "../../parts/Nav/Nav";
import ProfilePhoto from "../../assets/img/me.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header({isVisible}) {
  return (
    <header className="header">
      <Nav />
      <main className="header--container">
        <motion.section initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}} className="header__container--section">
          <h1 className="header__section--title">Front-End Developer</h1>
          <p className="section--subtitle">{`Hi, i'm Pedro Barbosa a front-end Developer based in ilhabela, Brasil 📍`}</p>
          <div className="icons--container">
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://www.linkedin.com/in/pedro-barbosa-dev/">
              <FaLinkedin size={36} />
            </a>
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://github.com/pedro-henrique-br">
              <FaGithub size={36} />
            </a>
          </div>
        </motion.section>
        <img
          className="header--profile-photo"
          src={ProfilePhoto}
          alt="profile photo"
        />
      </main>
    </header>
  );
}
