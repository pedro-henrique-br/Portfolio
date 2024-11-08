import { motion } from "framer-motion";
import { Tabs } from "../../parts/tabs/Tabs";
import styles from "./about.module.css";

export default function About() {
  const icons = [
    "npm",
    "git",
    "github",
    "next",
    "bootstrap",
    "javascript",
    "react",
    "typescript",
    "mysql",
    "nodejs"
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
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>Sobre mim</h1>
          <p className={styles["section-subtitle"]}>
            {"👋 Hello, I'm "}
            <span style={{ color: "#ff5471", fontWeight: 800}}>Pedro Barbosa</span>
            {
              "Sou um desenvolvedor front-end que ama criar aplicações que tragam soluções e estou cursando Analise e Desenvolvimento de Sistemas. Estou sempre estudando novas tecnologias e frameworks para melhorar minhas habilidades como desenvolvedor."
            }
          </p>
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>Qual é o meu objetivo?</h1>
          <p className={styles["subtitle-goal"]}>
            Estou em busca de novas oportunidades que me proponham desenvolvimento e aprendizado.
          </p>
          <h1 style={{ color: "#ff5471", fontWeight: 800}}>Minha stack</h1>
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
