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
      imageSrc: "/movieDB.png",
      info: "This is a movie app it allows users to search for films, view details of their film such as: film duration, IMBD rating, categories, company and film description. in addition to allowing you to save films as favorites and watch them later.",
      stack: ["html", "css", "javascript", "bootstrap"],
      sourceUrl: "https://github.com/pedro-henrique-br/Movie-App",
      previewUrl: "https://movie-app-beige-two-18.vercel.app/",
    },
    {
      name: "Ticketing system",
      imageSrc: "https://private-user-images.githubusercontent.com/71238431/376721022-f3b92ccd-8bb2-461b-b1a7-25bcfe83f9e9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkwMTMwNzAsIm5iZiI6MTcyOTAxMjc3MCwicGF0aCI6Ii83MTIzODQzMS8zNzY3MjEwMjItZjNiOTJjY2QtOGJiMi00NjFiLWIxYTctMjViY2ZlODNmOWU5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE1VDE3MTkzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwYTYzODNmMTFhY2FkOWEyNGI4NWE3NjkwZDg0MzY3ZmQ5MTRlZDYzNGRkOTk2Mjc5NGQ5MmZlNjRmODE5NDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0Ze_ZGzPOO7r-pEMdl6xbxH51SegFuM_m7pg_19cR1Y",
      info: "Help Desk ticket opening system, the application allows the user to create and view their open tickets, while in the administrator section it is possible to see the calls answered and attended to.",
      stack: ["typescript", "mui", "react", "supabase"],
      sourceUrl: "https://github.com/pedro-henrique-br/Help-desk-ticketing-system",
      previewUrl: "https://help-desk-ticketing-system-mu.vercel.app/home",
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
