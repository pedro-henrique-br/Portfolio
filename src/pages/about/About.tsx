import { motion } from "framer-motion";
import { Tabs } from "../../parts/tabs/Tabs";
import styles from "./about.module.css";

export default function About() {
  const icons = [
    "git",
    "github",
    "npm",
    "linux",
    "bootstrap",
    "javascript",
    "react",
    "typescript",
    "mysql",
  ];
  
  const iconUrl = `https://skillicons.dev/icons?i=`;

  return (
    <>
      <Tabs />
      <motion.div
        className={styles.container}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}>
        <section className={styles.section}>
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>About Me</h1>
          <p className={styles["section-subtitle"]}>
            {"👋 Hello, I'm "}
            <span style={{ color: "#ff5471", fontWeight: 800}}>Pedro Barbosa</span>
            {
              " a passionate front-end development enthusiast and a dedicated student of Systems Analysis and Development. I'm always exploring new technologies and frameworks to improve my skills and stay up to date with industry trends."
            }
          </p>
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>What is my goal?</h1>
          <p className={styles["subtitle-goal"]}>
            I am looking for new opportunities to improve my skills in the job
            market. Like an internship or front-end developer.
          </p>
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>My tech stack</h1>
          <div className={styles["icons-container"]}>
            <ul className={styles["icons"]}>
              {iconUrl
                ? icons.map((icon) => (
                    <li className={styles.icon} key={icon}>
                      <img alt={icon} src={iconUrl + icon}></img>
                      <p className={styles["icon-subtitle"]}>{icon}</p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </section>
      </motion.div>
    </>
  );
}
