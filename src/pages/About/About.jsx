import Nav from "../../parts/Nav/Nav";
import { motion } from "framer-motion";

export default function About({isVisible}) {
  const icons = [
    "git",
    "github",
    "npm",
    "linux",
    "bootstrap",
    "javascript",
    "react",
    "typescript",
    "nodejs",
  ];
  const iconUrl = `https://skillicons.dev/icons?i=`;

  return (
    <div className="about">
      <Nav />
      <div className="about--section">
        <motion.div initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}} className="about--container">
          <h1>About Me</h1>
          <p className="about--subtitle">
            {"👋 Hello, I'm "}
            <span>Pedro Barbosa</span>
            {
              " a  passionate front-end development enthusiast and a dedicated student of  Systems Analysis and Development. I'm always exploring new technologies and frameworks to improve my  skills and stay up to date with industry trends."
            }
          </p>
          <h1>What is my goal?</h1>
          <p className="about__subtitle--goal">
            I am looking for new opportunities to improve my skills in the job
            market. like a internship or front-end developer
          </p>
          <h1>My tech stack</h1>
          <div className="icons--container">
            <ul>
              {iconUrl
                ? icons.map((icon) => (
                    <li key={icon}>
                      <img alt={icon} src={iconUrl + icon}></img>
                      <p>{icon}</p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </motion.div>
        </div>
    </div>
  );
}
