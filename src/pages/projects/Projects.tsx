import styles from "./projects.module.css";
import { motion } from "framer-motion";
import { Tabs } from "../../parts/tabs/Tabs";
import { Button, Card, Container } from "react-bootstrap";
import { BiLogoGithub } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {

  const projects = [
    {
      name: "Sistema de Chamados",
      imageSrc: "/ticketingSystem.JPG",
      info: "Sistema de abertura de tickets de Help Desk, a aplicação permite que o usuário crie e visualize seus tickets abertos, enquanto, na seção de administrador, é possível ver e atender os chamados, e ver chamados fechados e em atendimento.",
      stack: ["typescript", "mui", "react", "supabase"],
      sourceUrl: "https://github.com/pedro-henrique-br/Help-desk-ticketing-system",
      previewUrl: "https://help-desk-ticketing-system-mu.vercel.app/home",
    },
    {
      name: "Assistência Técnica",
      imageSrc: "/assistenciaTecnica.JPG",
      info: "Landing page para assistência técnica especializada em soluções de ti.",
      stack: ["typescript", "mui", "react"],
      sourceUrl: "https://github.com/pedro-henrique-br/Web-informatica",
      previewUrl: "https://california-informatica.vercel.app/",
    },
  ];

  return (
    <>
      <Tabs />
      <motion.div
        className={styles.container}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}>
        <div className={styles["card-container"]}>
          {projects &&
            projects.map((project) => (
              <Card key={project.name} className={styles["card"]}>
                <Card.Img
                  className={styles["card-image"]}
                  variant="top"
                  src={project.imageSrc}
                />
                <Card.Body className={styles["card-body"]}>
                  <Card.Title
                    className={styles["project-title"]}
                    style={{ background: "none" }}>
                    {project.name}
                  </Card.Title>
                  <Container className={styles["button-container"]}>
                    <Button
                      className={styles.button}
                      href={project.sourceUrl}
                      target="_blank">
                      <BiLogoGithub
                        size={22}
                        className={styles["button-icon"]}
                      />
                      Ver código
                    </Button>
                    <Button
                      className={styles.button}
                      href={project.previewUrl}
                      target="_blank">
                      <BiLinkExternal
                        size={22}
                        className={styles["button-icon"]}
                      />
                       Ver demo
                    </Button>
                  </Container>
                  <Container
                    className={styles["project-info"]}
                    style={{ background: "none" }}>
                    <p className={styles.info} style={{ background: "none" }}>
                      {project.info}
                    </p>
                  </Container>
                  <Container className={styles["project-stack"]} >
                    <ul style={{background: "none"}} className={styles["technologies-container"]}>
                    {project.stack.map((technologie) => (
                      <li key={technologie} style={{background: "none", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <img style={{background: "none", height: "40px"}} src={`https://skillicons.dev/icons?i=${technologie}`} />
                        <p style={{background: "none", fontSize: "0.7rem"}}>{technologie}</p>
                      </li>
                    ))}
                  </ul>
                  </Container>
                </Card.Body>
              </Card>
            ))}
        </div>
      </motion.div>
    </>
  );
}
