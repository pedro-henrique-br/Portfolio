import styles from "./projects.module.css";
import { motion } from "framer-motion";
import { Tabs } from "../../parts/tabs/Tabs";
import { Button, Card, Container } from "react-bootstrap";
import { BiLogoGithub } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {

  const projects = [
    {
      name: "Movie App",
      imageSrc: "https://private-user-images.githubusercontent.com/71238431/348882954-18cd935c-1eab-4301-a545-370ae3f1169c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyNDM1NTEsIm5iZiI6MTcyMzI0MzI1MSwicGF0aCI6Ii83MTIzODQzMS8zNDg4ODI5NTQtMThjZDkzNWMtMWVhYi00MzAxLWE1NDUtMzcwYWUzZjExNjljLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA5VDIyNDA1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZiZTYzNjg5MDlmNmNlNTBjNzU2MzIwMGNlNDdmZDQzNGE4NjAwYjQ2YTNiOWUyOTYxMmQ3MGM1ZjQ0MmQ1ZjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tR7aE7lNvPVSfEuSUz_6WSf74QY1vAFqDiC-16YepN4",
      info: "This is a movie app it allows users to search for films, view details of their film such as: film duration, IMBD rating, categories, company and film description. in addition to allowing you to save films as favorites and watch them later.",
      stack: ["html", "css", "javascript", "bootstrap"],
      sourceUrl: "https://github.com/pedro-henrique-br/Movie-App",
      previewUrl: "https://movie-app-beige-two-18.vercel.app/",
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
                      Source code
                    </Button>
                    <Button
                      className={styles.button}
                      href={project.previewUrl}
                      target="_blank">
                      <BiLinkExternal
                        size={22}
                        className={styles["button-icon"]}
                      />
                      Preview
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
